<?php
/**
 * Wrapper class around the Twitter API for PHP
 * Based on the class originally developed by David Billingham
 * and accessible at http://twitter.slawcup.com/twitter.class.phps
 * @author David Billingham <david@slawcup.com>
 * @author Aaron Brazell <aaron@technosailor.com>
 * @author Keith Casey <caseysoftware@gmail.com>
 * @version 1.0-beta
 * @package php-twitter
 * @subpackage classes
 */

class twitter{
	/**
	 * Authenticating Twitter user
	 * @var string
	 */
	var $username='';
	
	/**
	 * Autenticating Twitter user password
	 * @var string
	 */
	var $password='';

	/**
	 * Recommend setting a user-agent so Twitter knows how to contact you inc case of abuse. Include your email
	 * @var string
	 */
	var $user_agent='';

	/**
	 * Can be set to JSON (requires PHP 5.2 or the json pecl module) or XML - json|xml
	 * @var string
	 */
	var $type='json';

	/**
	 * It is unclear if Twitter header preferences are standardized, but I would suggest using them.
	 * More discussion at http://tinyurl.com/3xtx66
	 * @var array
	 */
	var $headers=array('X-Twitter-Client: ','X-Twitter-Client-Version: ','X-Twitter-Client-URL: ');

	/**
	 * @var array
	 */
	var $responseInfo=array();
    
	function twitter()
	{
		// Nothing
	}

	/**
	 * Send a status update to Twitter.
	 * @param string $status total length of the status update must be 140 chars or less.
	 * @return string|boolean
	 */
	function update($status)
	{
        $request = 'http://twitter.com/statuses/update.' . $this->type;
		//$status = $this->shorturl($status);
        $postargs = 'status='.urlencode($status);
        $out = $this->process($request,$postargs);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Send an unauthenticated request to Twitter for the public timeline. 
	 * Returns the last 20 updates by default
	 * @param boolean|integer $sinceid Returns only public statuses with an ID greater of $sinceid
	 * @return string
	 */
	function publicTimeline( $sinceid = false )
	{
        $qs='';
        if( $sinceid !== false )
            $qs = '?since_id=' . intval($sinceid);
        $request = 'http://twitter.com/statuses/public_timeline.' . $this->type . $qs;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Send an authenticated request to Twitter for the timeline of authenticating users friends. 
	 * Returns the last 20 updates by default
	 * @param boolean|integer $id Specifies the ID or screen name of the user for whom to return the friends_timeline. (set to false if you want to use authenticated user).
	 * @param boolean|integer $since Narrows the returned results to just those statuses created after the specified date.
	 * @return string
	 */
	function friendsTimeline( $id = false, $since = false )
	{
        $qs='';
        if( $since !== false )
            $qs='?since='.urlencode($since);
            
        if( $id === false )
            $request = 'http://twitter.com/statuses/friends_timeline.' . $this->type . $qs;
        else
            $request = 'http://twitter.com/statuses/friends_timeline/' . urlencode($id) . '.' . $this->type . $qs;
        
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Send an authenticated request to Twitter for the timeline of authenticating user. 
	 * Returns the last 20 updates by default
	 * @param boolean|integer $id Specifies the ID or screen name of the user for whom to return the friends_timeline. (set to false if you want to use authenticated user).
	 * @param integer $count Number of updates to include in the returned results.
	 * @param boolean|integer $since Narrows the returned results to just those statuses created after the specified date.
	 * @return string
	 */
	function userTimeline($id=false,$count=20,$since=false)
	{
        $qs='?count='.intval($count);
        if( $since !== false )
            $qs .= '&since='.urlencode($since);
            
        if( $id === false )
            $request = 'http://twitter.com/statuses/user_timeline.' . $this->type . $qs;
        else
            $request = 'http://twitter.com/statuses/user_timeline/' . urlencode($id) . '.' . $this->type . $qs;
        
       	$out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Returns a single status, specified by the id parameter below.  The status's author will be returned inline.
	 * @param integer $id The id number of the tweet to be returned.
	 * @return string
	 */
	function showStatus( $id )
	{
        $request = 'http://twitter.com/statuses/show/'.intval($id) . '.' . $this->type;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
    }

	/**
	 * Retrieves favorited tweets
	 * @param integer|string $id Required. The username or ID of the user to be fetched
	 * @param integer $page Optional. Tweets are returned in 20 tweet blocks. This int refers to the page/block
	 * @return string
	 */
	function getFavorites( $id, $page=false )
	{
		if( $page != false )
			$qs = '?page=' . $page;
		
		$request = 'http://twitter.com/favorites.' . $this->type . $qs; 
		return $this->objectify( $this->process($request) );
	}
	
	/**
	 * Favorites a tweet
	 * @param integer $id Required. The ID number of a tweet to be added to the authenticated user favorites
	 * @return string
	 */
	function makeFavorite( $id )
	{
		$request = 'http://twitter.com/favorites/create/' . $id . '.' . $this->type;
		return $this->objectify( $this->process($request) );	
	}
	
	/**
	 * Unfavorites a tweet
	 * @param integer $id Required. The ID number of a tweet to be removed to the authenticated user favorites
	 * @return string
	 */
	function removeFavorite( $id )
	{
		$request = 'http://twitter.com/favorites/destroy/' . $id . '.' . $this->type;
		return $this->objectify( $this->process($request) );	
	}
	
	/**
	 * Checks to see if a friendship already exists
	 * @param string|integer $user_a Required. The username or ID of a Twitter user
	 * @param string|integer $user_b Required. The username or ID of a Twitter user
	 * @return string
	 */
	function isFriend( $user_a, $user_b )
	{
		$qs = '?user_a=' . urlencode( $user_a ) . '&amp;' . urlencode( $user_b );
		$request = 'http://twitter.com/friendships/exists.' . $this->type . $qs;
		return $this->objectify( $this->process($request) );
	}

	/**
	 * Follows a user
	 * @param integer|string $id the username or ID of a person you want to follow
	 * @return string
	 */
	function followUser( $id )
	{
		$request = 'http://twitter.com/friendships/create/' . $id . $this->type;
		return $this->objectify( $this->process($request) );
	}
	
	/**
	 * Unfollows a user
	 * @param integer|string $id the username or ID of a person you want to unfollow
	 * @return string
	 */
	function leaveUser( $id )
	{
		$request = 'http://twitter.com/friendships/destroy/' . $id . $this->type;
		return $this->objectify( $this->process($request) );
	}
	
	/**
	 * Blocks a user
	 * @param integer|string $id the username or ID of a person you want to block
	 * @return string
	 */
	function blockUser( $id )
	{
		$request = 'http://twitter.com/blocks/create/' . $id . $this->type;
		return $this->objectify( $this->process($request) );
	}
	
	/**
	 * Unblocks a user
	 * @param integer|string $id the username or ID of a person you want to unblock
	 * @return string
	 */
	function unblockUser()
	{
		$request = 'http://twitter.com/blocks/destroy/' . $id . $this->type;
		return $this->objectify( $this->process($request) );
	}

	/**
	 * Returns the authenticating user's friends, each with current status inline.  It's also possible to request another user's friends list via the id parameter below.
	 * @param integer|string $id Optional. The user ID or name of the Twitter user to query.
	 * @return string
	 */
	function friends( $id = false )
	{
        if( $id === false )
            $request = 'http://twitter.com/statuses/friends.' . $this->type;
        else
            $request = 'http://twitter.com/statuses/friends/' . urlencode($id) . '.' . $this->type;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Returns the authenticating user's followers, each with current status inline.
	 * @return string
	 */
	function followers()
	{
        $request = 'http://twitter.com/statuses/followers.' . $this->type;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Returns a list of the users currently featured on the site with their current statuses inline.
	 * @return string
	 */
	function featured()
	{
        $request = 'http://twitter.com/statuses/featured.' . $this->type;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    

	/**
	 * Returns extended information of a given user, specified by ID or screen name as per the required
	 * id parameter below.  This information includes design settings, so third party developers can theme
	 * their widgets according to a given user's preferences.	 
	 * @param integer|string $id Optional. The user ID or name of the Twitter user to query.
	 * @return string
	 */
	function showUser( $id )
	{
        $request = 'http://twitter.com/users/show/'.urlencode($id).'.' . $this->type;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Returns a list of the direct messages sent to the authenticating user.	 
	 * @param string $since (HTTP-formatted date) Optional.  Narrows the resulting list of direct messages to just those sent after the specified date. 
	 * @return string
	 */
	function directMessages( $since = false )
	{
        $qs='';
        if( $since !== false )
            $qs = '?since=' . urlencode($since);
        $request = 'http://twitter.com/direct_messages.' . $this->type .$qs;
        $out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
    
	/**
	 * Sends a new direct message to the specified user from the authenticating user.  Requires both the user
	 * and text parameters below.	 
	 * @param string|integer Required. The ID or screen name of the recipient user.
	 * @param string $user The text of your direct message.  Be sure to URL encode as necessary, and keep it under 140 characters.  
	 * @return string
	 */
	function sendDirectMessage( $user, $text )
	{
        $request = 'http://twitter.com/direct_messages/new.' . $this->type;
        $postargs = 'user=' . urlencode($user) . '&text=' . urlencode($text);
        $out = $this->process( $request, $postargs );
		return $this->objectify( $this->process($request) );
	}

	/**
	 * Sends a request to follow a user specified by ID
	 * @param integer|string $id The twitter ID or screenname of the user to follow
	 * @return string
	 */
	function followUser( $id )
	{
		$request = 'http://twitter.com/friendships/create/' . $id . '.' . $this->type;
		return $this->objectify( $this->process($request) );
	}
	
	/**
	 * Updates Geo location
	 * @param string $location Required. Must be urlencoded. Example (San%20Francisco)
	 * @return string
	 */
	function updateLocation( $location )
	{
		$qs = '?location=' . urlencode($location);
		$request = 'http://twitter.com/account/update_location.' . $this->type . $qs;
		return $this->objectify( $this->process( $request ) );
	}
	
	/**
	 * Updates delivery device
	 * @param string $device Required. Must be of type 'im', 'sms' or 'none'
	 * @return string
	 */
	function updateDevice( $device )
	{
		if( !in_array( $device, array('im','sms','none') ) )
			return false;
			
		$qs = '?device=' . $device;
		$request = 'http://twitter.com/account/update_delivery_device.' . $this->type . $qs;
		return $this->objectify( $this->process( $request ) );
	}
	
	/**
	 * Detects if Twitter is up or down. Chances are, it will be down. ;-) Here's a hint - display CPM ads whenever Twitter is down
	 * @return boolean
	 */
	function twitterAvailable()
	{
		$request = 'http://twitter.com/help/test.' . $this->type;
		if( $this->objectify( $this->process($request) ) == 'ok' )
			return true;
		
		return false;
	}
	
	/**
	 * Any prescheduled maintenance?
	 * @return string
	 */
	function maintenanceSchedule()
	{
		$request = 'http://twitter.com/help/downtime_schedule.' . $this->type;
		return $this->objectify( $this->process( $request ) );
	}

	/**
	 * Rate Limit API Call. Sometimes Twitter needs to degrade. Use this non-ratelimited API call to work your logic out
	 * @return integer|boolean 
	 */
	function ratelimit()
	{
		$request = 'http://twitter.com/account/rate_limit_status.' . $this->type;
		$out = $this->process($request);
		return $this->objectify( $this->process($request) );
	}
	
	/**
	 * Uses the http://is.gd API to produce a shortened URL. Pluggable by extending the twitter class
	 * @param string $url The URL needing to be shortened
	 * @return string
	 */
	function shorturl( $url )
	{
		// Using is.gd because it's good
		$request = 'http://is.gd/api.php?longurl=' . $url;
		return $this->process( $request );
	}
	
	/**
	 * PHP4 compatible XML parsing
	 * NEEDS FIXING - UNUSED
	 */
	function php4_parse_xml( $data )
	{
		$parser = xml_parser_create('UTF-8');
		xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1); 
		xml_parse_into_struct($parser, $data, $vals, $index); 
		xml_parser_free($parser);
		echo'<pre>';
		print_r($vals);
		print_r($index);
		echo'</pre>';
	}
	
	/**
	 * Internal function where all the juicy curl fun takes place
	 * this should not be called by anything external unless you are
	 * doing something else completely then knock youself out.
	 * @access private
	 * @param string $url Required. API URL to request
	 * @param string $postargs Optional. Urlencoded query string to append to the $url
	 */
	function process($url,$postargs=false)
	{
		$ch = curl_init($url);
		if($postargs !== false)
		{
			curl_setopt ($ch, CURLOPT_POST, true);
			curl_setopt ($ch, CURLOPT_POSTFIELDS, $postargs);
        }
        
		if($this->username !== false && $this->password !== false)
			curl_setopt($ch, CURLOPT_USERPWD, $this->username.':'.$this->password);
        
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_NOBODY, 0);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_USERAGENT, $this->user_agent);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);

        $response = curl_exec($ch);
        
        $this->responseInfo=curl_getinfo($ch);
        curl_close($ch);
        
        if( intval( $this->responseInfo['http_code'] ) == 200 )
			return $response;    
        else
            return false;
	}

	/**
	 * Function to prepare data for return to client
	 * @access private
	 * @param string $data
	 */
	function objectify( $data )
	{
		if( $this->type ==  'json' )
			return (object) json_decode( $data );

		else if( $this->type == 'xml' )
		{
			if( function_exists('simplexml_load_string') )
			{
				$obj = simplexml_load_string( $data );

				$statuses = array();
				foreach( $obj->status as $status )
				{
					$statuses[] = $status;
				}
				return (object) $statuses;
			}
			else
			{
				return $out;
			}
		}
		else
			return false;
	}
}

?>
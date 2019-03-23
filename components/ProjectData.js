import Datetime from "Datetime"

const ProjectQuery = `
query {
  repository(owner: "icco", name:"graphql") {
    stargazers {
      totalCount
    }
    watchers {
      totalCount
    }
    forkCount
    updatedAt
  }
}
https://api.github.com/graphql
{
  "authorization": "bearer 28b1423ce7d34b3b660ae38029f9b6910fd9268d"
}
`

export default (params) => {
  return (
    <div className={params.className}>
    <div class="cf">
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Last Commit</dd>
      <dd class="f3 fw6 ml0"><Datetime>2019-03-17T03:58:10Z</Datetime></dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Watchers</dd>
      <dd class="f3 fw6 ml0">3</dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Stars</dd>
      <dd class="f3 fw6 ml0">22</dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Forks</dd>
      <dd class="f3 fw6 ml0">4</dd>
    </dl>
    </div>
    </div>
  );
};

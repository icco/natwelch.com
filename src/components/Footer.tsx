import { Footer as CommonFooter } from "@icco/react-common/Footer"

const Footer = ({ edit }: { edit?: string }) => (
  <CommonFooter
    startYear={2006}
    sourceRepo="https://github.com/icco/natwelch.com"
    editUrl={
      edit
        ? `https://github.com/icco/natwelch.com/edit/main/wiki/${edit}`
        : undefined
    }
  />
)

export default Footer

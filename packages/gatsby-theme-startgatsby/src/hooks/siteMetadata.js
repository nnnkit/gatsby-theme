import { graphql, useStaticQuery } from "gatsby";

export default function getSiteMetadata() {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          name
          title
          description
        }
      }
    }
  `);
  return data.site.siteMetadata;
}

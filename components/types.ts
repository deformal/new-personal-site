import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface DataProps {
  data: {
    allExpJson: {
      nodes: Array<{
        id: string
        name: string
        link: string
        role: string
        dates: string
        job_type: string
        logo: any | IGatsbyImageData
      }>
    }
    allContactJson: {
      nodes: [
        {
          id: string
          logo: string
          link: string
          social: string
        },
      ]
    }
    allProjectJson: {
      nodes: Array<{
        id: string
        name: string
        links: string
        description: string
        stack: string
        logo: string
        downloads: [
          {
            link: string
            type: string
            logo: string
          },
        ]
      }>
    }
    allImageSharp: any
  }
}

export type DownloadButton = {
  link: string
  type: string
  logo: string
}
export type FooterData = {
  allContactJson: {
    nodes: [
      {
        id: string
        logo: string
        link: string
        social: string
      },
    ]
  }
}

import { NextResponse } from "next/server";

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export const GET = async (req:any, res:any) => {
  try {
    const data = []
    const response = await notion.databases.query({ database_id: process.env.NOTION_PROJECTS_DATABASE_ID });
    if (response?.results?.length) {
      const sortedData = response.results.sort(
        (a:any,b:any)=>a.properties.id.number - b.properties.id.number)
       
        const data = sortedData.map((page:any) => {
        return {
          intro: page.properties.intro.rich_text[0].plain_text,
          quickIntro: page.properties.quickIntro.rich_text[0].plain_text,
          imageSrc: page.properties.imageSrc.url,
          tags: page.properties.tags.multi_select.map((tag:any) => tag.name),
          projectLink: page.properties.projectLink.url,
          id: page.properties.id.number,
          source_code: page.properties.source_code.url,
          title: page.properties.title.title[0].plain_text,
        };
      });
      return NextResponse.json({message:'ok', data},{status:200})
    }
    return NextResponse.json({message:'ok', response},{status:200})
  } catch (error) {
    console.log(error);
    // backup projects if api fails
    
    const data=[
      {
          "intro": "Portfolio inspired by visual-studio code editor, multi theme, implemented using NextJS-13 ",
          "quickIntro": "vs-code style portfolio",
          "imageSrc": "https://i.imgur.com/Z2r1G8U.png",
          "tags": [
              "react"
          ],
          "projectLink": "https://a--k.vercel.app/",
          "id": 1,
          "source_code": "https://github.com/ArunNGun/bento_port",
          "title": "VS-code themed page"
      },
      {
          "intro": "A simple landing page with a complex 3D-parallax effect.",
          "quickIntro": "3D-prallex effect, vanilla JS.",
          "imageSrc": "https://i.imgur.com/QThn02Y.jpg",
          "tags": [
              "react",
              "html5"
          ],
          "projectLink": "https://arunngun.github.io/3D-parallax/",
          "id": 2,
          "source_code": "https://github.com/ArunNGun/3D-parallax",
          "title": "Parallax-3D"
      },
      {
          "intro": "A NextJs based webapp which gives compressive insights about pull-requests and developers/reviewers in your organization/team.",
          "quickIntro": "NextJs app for better Github overview.",
          "imageSrc": "https://i.imgur.com/1Z8TYuA.png",
          "tags": [
              "react",
              "git"
          ],
          "projectLink": "https://gh-metrics.vercel.app/",
          "id": 3,
          "source_code": "https://github.com/ArunNGun/git-metrics",
          "title": "gh-metrics"
      },
      {
          "intro": "Expense tracker / money manager which can be controlled by using your voice as well",
          "quickIntro": "ReactJs app for tracking expense using voice.",
          "imageSrc": "https://i.imgur.com/g9ZMJa4.jpg",
          "tags": [
              "react"
          ],
          "projectLink": "Expense Tracker (expensetracker404.netlify.app)",
          "id": 4,
          "source_code": "https://github.com/ArunNGun/Expense-Tracker_voice_react",
          "title": "Voice-expense-tracker"
      },
      {
          "intro": "A js based drumkit, produces drum sounds when specified keys are pressed on keyboard or by mouse.",
          "quickIntro": "A fun Js app to generate music.",
          "imageSrc": "https://i.imgur.com/BO14UTx.png",
          "tags": [
              "js"
          ],
          "projectLink": "https://arunngun.github.io/Drumkit/",
          "id": 5,
          "source_code": "https://github.com/ArunNGun/Drumkit",
          "title": "Drumkit"
      },
      {
          "intro": "An animated react landing page, with soothing music, which gives you random 100 reasons to live life.",
          "quickIntro": "a react app that gives 100 reasons to live.",
          "imageSrc": "https://i.imgur.com/lL1MkIU.png",
          "tags": [
              "react"
          ],
          "projectLink": "https://nodie2day.vercel.app/",
          "id": 6,
          "source_code": "https://github.com/ArunNGun/nodie2day",
          "title": "NoDie2Day"
      },
      {
          "intro": "An elegant landing page for a shopping website with smooth animations.",
          "quickIntro": "simple and clean landing page.",
          "imageSrc": "https://i.imgur.com/Jva7aEb.png",
          "tags": [
              "html5",
              "js"
          ],
          "projectLink": "https://arunngun.github.io/triply-html-css/",
          "id": 7,
          "source_code": "https://github.com/ArunNGun/triply-html-css",
          "title": "triply"
      }
  ]
    return NextResponse.json({message:'ok', data},{status:500})
  }
};

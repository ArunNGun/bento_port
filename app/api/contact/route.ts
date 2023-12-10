import { NextResponse } from "next/server";

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export const POST = async (req:any, res:any) => {
  try {
    const { name='', email='', subject='', message='' }:any = await req.json()
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return NextResponse.json({message:'ok'},{status:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:'ok'},{status:200})
  }
};
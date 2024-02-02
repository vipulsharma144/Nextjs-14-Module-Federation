import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    res: NextResponse
) {


    const template: any = {
        "1": {
            "id": "1",
            "name": "Template 1",
            "path": "/Volumes/VAULT/work/mf/video/sample/src/Main",
            "componentName": "Main"
        },
        "2": {
            "id": "2",
            "name": "Template 2",
            "path": "/Volumes/VAULT/work/mf/video/sample2/Component",
            "componentName": "Component"
        },
    }


    // get query paRAMS
    const { searchParams } = new URL(req.url);
    const templateId = searchParams.get('id');
    if (templateId && template[templateId])
        return NextResponse.json(template[templateId])
    else return NextResponse.json({})

}
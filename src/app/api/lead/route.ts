export async function POST(req: Request) {
    try {

      const body = await req.json();

      const response = await fetch(process.env.GOOGLE_SHEET_URL!, {
        method: "POST",
        body: JSON.stringify(body),
      });

      
  
      const data = await response.json();
  
      return Response.json(data);
    } catch (err) {
      return Response.json(
        { success: false, error: "Server error" },
        { status: 500 }
      );
    }
  }
from fastapi import APIRouter, UploadFile, File, Form
from fastapi.responses import JSONResponse

from ..services.gemini_service import GeminiService

router = APIRouter(prefix="/api", tags=["analysis"])

@router.post("/analyze")
async def analyze(
    file: UploadFile = File(...),
    description: str = Form(""),
    assumptions: str = Form("")
):
    content = await file.read()
    service = GeminiService()
    result = service.analyze(content, description, assumptions)
    return JSONResponse(result)

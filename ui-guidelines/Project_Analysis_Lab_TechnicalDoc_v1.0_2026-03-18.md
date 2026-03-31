# Project Analysis Lab Technical Documentation

**Version:** 1.0  
**Date:** 2026-03-18  
**Status:** Draft

---

## 1. Overview

The Project Analysis Lab is a new module within the Bettrlabs 2.0 ecosystem, designed to provide AI-powered product intelligence capabilities. This lab leverages Google Agent Development Kit (ADK) as the core orchestration framework, enabling sophisticated multi-agent workflows for product analysis, market intelligence, and competitive research.

**Target Audience:** Product managers, R&D scientists, and business analysts in the FMCG/CPG industry.

**Prerequisites:**
- Access to Bettrlabs platform
- Valid user authentication
- Sufficient lab token balance

---

## 2. System Architecture

### 2.1 Architecture Overview

The architecture follows a three-tier pattern with Google ADK serving as the central AI orchestration layer between the frontend and backend services.

```
+============================================================================+
|                           PROJECT ANALYSIS LAB                              |
+============================================================================+
|                                                                             |
|   +-----------------+        +------------------+       +----------------+ |
|   |  Next.js 16     |        |   FastAPI        |       |  Google ADK    | |
|   |  Frontend       |<------>|   Backend        |<----->|  Orchestrator  | |
|   |  (Port 3004)    |  REST  |   (Port 8000)    |       |                | |
|   +-----------------+        +------------------+       +-------+--------+ |
|                                                              |             |
+==============================================================|=============+
                                                               |
                    +------------------------------------------+
                    |                                          |
          +---------v---------+                    +-----------v----------+
          |  Agent Registry   |                    |   Tool Registry      |
          +-------------------+                    +----------------------+
          | - Analysis Agent  |                    | - Web Search         |
          | - Research Agent  |                    | - Document Parser    |
          | - Report Agent    |                    | - Data Visualization |
          | - Validator Agent |                    | - Database Query     |
          +---------+---------+                    +-----------+----------+
                    |                                          |
                    +------------------+-----------------------+
                                       |
          +----------------------------v----------------------------+
          |                    LLM Provider Layer                   |
          +---------------------------------------------------------+
          |  Google Gemini (gemini-2.0-flash, gemini-1.5-pro)       |
          |  LiteLLM Gateway for provider-agnostic routing          |
          +---------------------------------------------------------+
                                       |
          +----------------------------v----------------------------+
          |                    Data & Storage Layer                 |
          +---------------------------------------------------------+
          |  PostgreSQL  |  Firebase Auth  |  AWS S3  |  Firestore  |
          +---------------------------------------------------------+
```

### 2.2 Component Description

| Component | Technology | Role |
|-----------|------------|------|
| Frontend | Next.js 16 + React 19 | User interface with SSE streaming |
| Backend API | FastAPI (Python 3.12) | REST API, authentication, business logic |
| ADK Orchestrator | Google ADK + LangGraph | Agent coordination, workflow management |
| Agent Registry | Python classes | Specialized AI agents for analysis tasks |
| Tool Registry | MCP Protocol | External tools and data sources integration |
| LLM Provider | Google Gemini + LiteLLM | Language model inference |
| Database | PostgreSQL | Session storage, user data, token management |
| Authentication | Firebase Auth | Identity provider, session management |
| Storage | AWS S3 | Reports, documents, cached data |

---

## 3. Google ADK Integration

### 3.1 Agent Definitions

Google ADK serves as the central orchestration framework. The Project Analysis Lab registers four specialized agents that collaborate through ADK workflow definitions.

| Agent | Model | Purpose |
|-------|-------|---------|
| **Analysis Agent** | gemini-2.0-flash-exp | Processes product data inputs, extracts key metrics, performs competitive benchmarking |
| **Research Agent** | gemini-1.5-pro | Conducts web-based market research, aggregates data from multiple sources |
| **Report Agent** | gemini-1.5-flash | Synthesizes analysis results into structured reports (PDF, DOCX, slides) |
| **Validator Agent** | gemini-2.0-flash-exp | Validates user inputs for FMCG relevance, extracts category and geography metadata |

### 3.2 Workflow Pattern

Agents execute in a directed graph pattern defined via LangGraph:

```
[User Input] → [Validator Agent] → [Analysis Agent] → [Research Agent] → [Report Agent] → [Output]
```

**Workflow Steps:**

1. **Validation Phase** - Validator Agent checks input relevance and extracts metadata
2. **Analysis Phase** - Analysis Agent processes product data and generates insights
3. **Research Phase** - Research Agent gathers market context and competitive data
4. **Report Phase** - Report Agent synthesizes all outputs into final deliverable

Each step streams results via Server-Sent Events (SSE) to the frontend for real-time user feedback.

---

## 4. API Endpoints

### 4.1 Core Endpoints

| Endpoint | Method | Description | Token Cost |
|----------|--------|-------------|------------|
| `/api/v1/project-analysis/analyze` | POST | Start product analysis workflow (SSE) | 100 units |
| `/api/v1/project-analysis/validate` | POST | Validate input without starting workflow | 10 units |
| `/api/v1/project-analysis/history` | GET | Retrieve paginated session history | Free |
| `/api/v1/project-analysis/session/{id}` | GET | Get session details and results | Free |
| `/api/v1/project-analysis/export` | GET | Export report (PDF/DOCX) | Free |
| `/api/v1/project-analysis/cancel/{id}` | POST | Cancel running analysis | Free |

### 4.2 Request/Response Examples

#### Start Analysis

```http
POST /api/v1/project-analysis/analyze
Content-Type: application/json
Authorization: Bearer <token>

{
  "product_name": "Organic Almond Butter",
  "category": "Spreads",
  "geography": "India",
  "analysis_type": "comprehensive",
  "include_competitors": true
}
```

**Response (SSE Stream):**

```
event: progress
data: {"step": "validation", "status": "completed", "message": "Input validated"}

event: progress
data: {"step": "analysis", "status": "in_progress", "message": "Analyzing product data"}

event: result
data: {"step": "analysis", "insights": {...}}

event: complete
data: {"session_id": "pa_abc123", "status": "completed"}
```

---

## 5. Implementation Steps

### 5.1 Frontend Setup

1. **Create Repository**
   ```bash
   npx create-next-app@latest project-analysis-lab-frontend --typescript --tailwind --app
   cd project-analysis-lab-frontend
   ```

2. **Configure Environment**
   ```bash
   echo "NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000" > .env.local
   echo "NEXT_PUBLIC_LAB_NAME=project-analysis" >> .env.local
   ```

3. **Install Dependencies**
   ```bash
   pnpm add @reduxjs/toolkit react-redux react-markdown sonner lucide-react
   ```

### 5.2 Backend Setup

1. **Create Router Module**
   ```python
   # src/routers/project_analysis.py
   from fastapi import APIRouter, Depends
   from src.dependencies import get_current_user, require_lab_tokens
   
   router = APIRouter(prefix="/project-analysis", tags=["Project Analysis"])
   
   @router.post("/analyze")
   async def start_analysis(
       request: AnalysisRequest,
       user = Depends(require_lab_tokens("project-analysis"))
   ):
       # Start ADK workflow
       pass
   ```

2. **Register Router**
   ```python
   # src/main.py
   from src.routers import project_analysis_router
   
   app.include_router(project_analysis_router, prefix="/api/v1")
   ```

3. **Define ADK Agents**
   ```python
   # src/agents/project_analysis/analysis_agent.py
   from google.adk import Agent, Tool
   
   class AnalysisAgent(Agent):
       name = "product_analyzer"
       model = "gemini-2.0-flash-exp"
       tools = [Tool(name="benchmark", func=run_benchmark)]
   ```

### 5.3 Database Configuration

```sql
-- Add lab token configuration
INSERT INTO lab_token_config (lab_name, required_units, description)
VALUES ('project-analysis', 100, 'Project Analysis Lab operations');

-- Register lab in marketplace
INSERT INTO marketplace_labs (name, description, status, route)
VALUES ('Project Analysis', 'AI-powered product intelligence', 'active', '/project-analysis');
```

---

## 6. Deployment

### 6.1 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BACKEND_URL` | Backend API URL | `https://api.bettrlabs.com` |
| `DATABASE_URL` | PostgreSQL connection | `postgresql://user:pass@host/db` |
| `GOOGLE_API_KEY` | Gemini API key | `AIza...` |
| `AWS_ACCESS_KEY_ID` | S3 access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | S3 secret key | `...` |
| `FIREBASE_PROJECT_ID` | Firebase project | `bettrlabs-4f71b` |

### 6.2 Deployment Checklist

- [ ] Frontend built and deployed to port 3004
- [ ] Backend router registered and tested
- [ ] ADK agents configured with proper model endpoints
- [ ] Lab token configuration added to database
- [ ] Marketplace lab entry created
- [ ] SSE streaming verified
- [ ] Authentication flow tested

---

## 7. Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| SSE connection drops | Network timeout | Implement reconnection logic with exponential backoff |
| Token deduction fails | Insufficient balance | Check `user_token_balance` table |
| Agent timeout | LLM latency | Increase `AGENT_TIMEOUT` environment variable |
| Report generation fails | S3 permissions | Verify AWS credentials and bucket policies |

---

## 8. Conclusion

The Project Analysis Lab extends the Bettrlabs platform with dedicated product intelligence capabilities. By leveraging Google ADK as the central orchestration layer, the lab achieves scalable, maintainable multi-agent workflows. The modular architecture ensures seamless integration with existing infrastructure while enabling future extension of agent capabilities.

**Next Steps:**
- Extend agent capabilities for additional analysis types
- Integrate additional data sources via MCP tools
- Implement collaborative workflows for team-based analysis

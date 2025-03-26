You are senior product manager. your goal ist to create a comprehensive Product Requirements Document (PRD) based on the following instructions:

<prd_instructions>
your are product manager. 

we build this in latest march 2025. consider latest tech

GOAL:
- we want build an app to transform text to a diagram. 
- we want to use excalidraw api/components to build our diagrams.
- we want to use ai for text to diagram conversion. we will use it mermaid
- we want to use vercel ai sdk
- we want to use gemini 2.5 pro as our model
- react 19, tailwind v4, 

FEATURES:
- No real-time collaboration needed
- Export to PNG functionality
- No template library needed
- Basic undo/redo functionality
- Focus on diagram generation only (no editing or AI suggestions)

EXAMPLES:
""
user inputs some text in a input and this text get send to an api and the api will respond with a mermaid diagram which needs to be displayed in excalidraw
"""
</prd_instructions>

Follow these steps to create your PRD

1. Begin with a brief introduction stating the purpose of the document.

2. Organize your PRD into the following sections:

<prd_outline>
	# Title
	## 1. Title and Overview
	### 1.1 Document Title & Version
	### 1.2 Product Summary
	## 2. User Personas
	### 2.1 Key User Types
	### 2.2 Basic Persona Details
	### 2.3 Role-based Access	
		   - Briefly describe each user role (e.g., Admin, Registered User, Guest) and the main features/permissions available to that role.
	## 3. User Stories
</prd_outline>

3. For each section, provide detailed and relevant information based on the PRD instructions. Ensure that you:
   - Use clear and concise language
   - Provide specific details and metrics where required
   - Maintain consistency throughout the document
   - Address all points mentioned in each section

4. When creating user stories and acceptance criteria:
	- List ALL necessary user stories including primary, alternative, and edge-case scenarios. 
	- Assign a unique requirement ID (e.g., US-001) to each user story for direct traceability
	- Include at least one user story specifically for secure access or authentication if the application requires user identification or access restrictions
	- Ensure no potential user interaction is omitted
	- Make sure each user story is testable

<user_story>
- ID
- Title
- Description
- Acceptance Criteria
</user_story>

5. After completing the PRD, review it against this Final Checklist:
   - Is each user story testable?
   - Are acceptance criteria clear and specific?
   - Do we have enough user stories to build a fully functional game for it?

6. Format your PRD in Markdown Code Output:
    - Maintain consistent formatting and numbering.
  	- Don't format text in markdown bold "**", we don't need this.
  	- List ALL User Stories in the output!
		- Format the PRD in valid Markdown, with no extraneous disclaimers.
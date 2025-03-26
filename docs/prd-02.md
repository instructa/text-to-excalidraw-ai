# Product Requirements Document: Text-to-Diagram App

## 1. Title and Overview

### 1.1 Document Title & Version
Product Requirements Document: Text-to-Diagram App, Version 2.0

### 1.2 Product Summary
This document outlines the requirements for a Text-to-Diagram application. The application will allow users to input text and transform it into a visual diagram using AI and the Excalidraw library. The application will focus on diagram generation and export functionalities, omitting real-time collaboration and template libraries. The target launch date is March 2025, leveraging the latest technologies such as React 19, Tailwind CSS v4, Vercel AI SDK, and Gemini 2.5 Pro for AI-powered diagram generation.

## 2. User Personas

### 2.1 Key User Types
1. **Individual User:** Users who need to quickly visualize textual information for personal or professional use, such as students, project managers, and analysts.
2. **Professional User:** Users within organizations who require diagram generation for documentation, presentations, or internal communication, such as business analysts, technical writers, and software developers.

### 2.2 Basic Persona Details

**Persona 1: Individual User - Alex**
- **Name:** Alex
- **Role:** Student/Freelancer
- **Needs:** Quickly create diagrams from notes and meeting minutes for study and project planning.
- **Tech Savviness:** Comfortable with web applications, but not a developer.
- **Goals:** Visualize information efficiently, export diagrams for reports and notes.

**Persona 2: Professional User - Sarah**
- **Name:** Sarah
- **Role:** Business Analyst
- **Needs:** Generate diagrams for process flows, system architectures, and presentations for stakeholders.
- **Tech Savviness:** Proficient with professional software, needs reliable and efficient tools.
- **Goals:** Create clear and professional diagrams, integrate diagrams into documentation and presentations.

### 2.3 Role-based Access
This application is designed for individual use and does not require user accounts or role-based access. All features will be available to all users without login requirements.

## 3. User Stories

- ID: US-001
- Title: Generate Diagram from Text
- Description: As a user, I want to input text into the application so that the AI can process it and generate a diagram based on the text's content.
- Acceptance Criteria:
    - The user can input text in a designated input area.
    - Upon submission, the text is sent to the backend for AI processing.
    - The application uses Gemini 2.5 Pro via Vercel AI SDK to generate diagram elements.
    - The generated elements are rendered in Excalidraw within the application.
    - An error message is displayed if diagram generation fails.

- ID: US-002
- Title: View Generated Diagram in Excalidraw
- Description: As a user, I want to see the generated diagram displayed in an Excalidraw component so that I can visually review the diagram.
- Acceptance Criteria:
    - The generated diagram is displayed using the Excalidraw component.
    - The diagram is rendered correctly and is visually clear.
    - The user interface provides a clear view of the diagram within the application.

- ID: US-003
- Title: Export Diagram to PNG
- Description: As a user, I want to export the generated diagram as a PNG file so that I can use it in documents and presentations.
- Acceptance Criteria:
    - An "Export to PNG" button is available in the user interface.
    - When the "Export to PNG" button is clicked, the application initiates a download of the diagram in PNG format.
    - The exported PNG file accurately represents the diagram displayed in Excalidraw.
    - The exported PNG file is saved to the user's local system.

- ID: US-004
- Title: Undo Last Action
- Description: As a user, I want to be able to undo the last action (text input and diagram generation) so that I can correct mistakes or revert to a previous state.
- Acceptance Criteria:
    - An "Undo" button is available in the user interface.
    - Clicking the "Undo" button reverts the application to the state before the last diagram generation.
    - The previously generated diagram and input text are cleared or reverted to their prior state.

- ID: US-005
- Title: Redo Last Undo Action
- Description: As a user, I want to be able to redo an action that was previously undone so that I can restore actions if I undo by mistake.
- Acceptance Criteria:
    - A "Redo" button is available in the user interface, enabled after an "Undo" action.
    - Clicking the "Redo" button restores the action that was last undone.
    - The diagram and input text are restored to the state they were in before the "Undo" action.

- ID: US-006
- Title: Clear Input Text
- Description: As a user, I want to be able to clear the input text area so that I can easily start with a new diagram.
- Acceptance Criteria:
    - A "Clear Input" button is available.
    - Clicking the "Clear Input" button clears the text from the input area.
    - The diagram display area is also cleared when the input text is cleared, or it remains empty if no diagram was generated yet.

- ID: US-007
- Title: Handle API Errors Gracefully
- Description: As a user, I want the application to handle errors from the AI API gracefully so that I am informed if diagram generation fails and can understand why.
- Acceptance Criteria:
    - If the API request to Gemini 2.5 Pro fails, the application displays a user-friendly error message.
    - The error message should provide basic information about the failure, such as "Diagram generation failed. Please check your input text and try again."
    - The application remains functional even if API errors occur, allowing the user to try again or clear the input.

- ID: US-008
- Title: Responsive Design
- Description: As a user, I want the application to be responsive and work well on different screen sizes (desktop and mobile) so that I can use it on any device.
- Acceptance Criteria:
    - The application layout adjusts appropriately to different screen sizes.
    - Input area, diagram display, and buttons are accessible and usable on both desktop and mobile browsers.
    - The application is tested on common desktop and mobile screen resolutions to ensure responsiveness.

## 4. Technical Implementation

### 4.1 Excalidraw Components and API Integration

#### Core Components
1. **Excalidraw Component**: The main canvas component where diagrams will be rendered.
   ```jsx
   import { Excalidraw } from "@excalidraw/excalidraw";
   
   <Excalidraw
     excalidrawAPI={(api) => setExcalidrawAPI(api)}
     initialData={{
       elements: [],
       appState: { viewBackgroundColor: "#ffffff" }
     }}
     onChange={(elements, appState) => {
       // Handle updates
     }}
     theme="light"
   />
   ```

2. **ExcalidrawAPI**: Interface for programmatically controlling Excalidraw, allowing the application to update the scene with AI-generated elements.
   ```jsx
   const [excalidrawAPI, setExcalidrawAPI] = useState(null);
   
   // Use API to update diagram with AI-generated elements
   excalidrawAPI.updateScene({ elements: aiGeneratedElements });
   ```

#### Additional Components
1. **MainMenu**: Custom menu for application-specific controls.
   ```jsx
   import { MainMenu } from "@excalidraw/excalidraw";
   
   <Excalidraw>
     <MainMenu>
       {/* Custom menu items */}
     </MainMenu>
   </Excalidraw>
   ```

2. **Footer**: Area for additional controls and information.
   ```jsx
   import { Footer } from "@excalidraw/excalidraw";
   
   <Excalidraw>
     <Footer>
       <button onClick={handleAIGeneration}>Generate Diagram</button>
     </Footer>
   </Excalidraw>
   ```

### 4.2 AI to Excalidraw Element Conversion

The application will:

1. Take user text input and send it to Gemini 2.5 Pro via Vercel AI SDK
2. Process the response to generate Excalidraw element skeletons
3. Convert these skeletons to proper Excalidraw elements:

```jsx
import { convertToExcalidrawElements } from "@excalidraw/excalidraw";

// Example element skeleton (simplified structure)
const elementSkeletons = [
  {
    type: "rectangle",
    x: 100,
    y: 100,
    width: 200,
    height: 100,
    text: "User Input Box"
  },
  {
    type: "arrow",
    points: [
      [150, 200],
      [150, 300]
    ]
  }
];

// Convert to Excalidraw elements
const excalidrawElements = convertToExcalidrawElements(elementSkeletons);

// Update the scene
excalidrawAPI.updateScene({ elements: excalidrawElements });
```

### 4.3 Implementation Workflow

1. User enters text in the input area
2. Application sends text to Gemini 2.5 Pro API
3. API returns structured data representing diagram elements
4. Application converts structured data to Excalidraw element skeletons
5. Element skeletons are converted to Excalidraw elements
6. Excalidraw component is updated with the new elements
7. User can view, modify, and export the diagram

## 5. Future Enhancements (Post-Launch)

- Custom diagram templates
- Real-time collaboration features
- Additional export formats (SVG, PDF)
- Diagram style customization presets
- Local storage of diagram history 
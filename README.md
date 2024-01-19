# Web Notepad Documentation

## Introduction
The Web Notepad is a simple application for creating, editing, and deleting notes. It allows users to input text directly on the web page, automatically save their notes, and delete unwanted notes. This document will provide an overview of the provided HTML, CSS, and JavaScript code, explaining how the notepad functions and how you can customize it.

## HTML Structure
The HTML code defines the structure of the web page. Here's a brief explanation of the main elements:

- `<!DOCTYPE html>`: Declares the document type and HTML version.
- `<html lang="en">`: Sets the beginning of the HTML document with the language attribute set to English.
- `<head>`: Contains meta-information about the document, such as encoding, viewport, and page title.
- `<body>`: Contains the visible content of the page, including the notes container.

### Key Elements
- `<div class="container">`: A general container wrapping the entire application content.
- `<h1>`: Title of the application, displaying "Notes" with an image of a notepad.
- `<button class="btn">`: A button to create new notes, displaying an image of a pencil.
- `<div class="notes-container">`: Container where notes are displayed.

## Styling with CSS
The style of the application is defined in the "style.css" file. This file contains style rules to enhance the visual appearance of the application.

### Important Selectors
- `.container`: Styles the general container.
- `.input-box`: Styles the text input boxes for notes.
- `.btn`: Styles the create notes button.

## Functionality with JavaScript
The JavaScript code (contained in the "script.js" file) adds functionality to the application, enabling the creation, editing, and deletion of notes.

### Variables
- `notesContainer`: Reference to the notes container.
- `createBtn`: Reference to the create notes button.
- `notes`: Reference to the text input box for notes.
- `previousNote`: Stores the reference of the previously created note.

### Functions
- `showNotes()`: Displays saved notes from localStorage on the screen.
- `updateStorage()`: Updates the localStorage with the current content of the notes container.
- `createBtn.addEventListener("click", ... )`: Adds an event listener to create a new note when the button is clicked.
- `notesContainer.addEventListener("click", ... )`: Adds an event listener to delete notes or update localStorage when a note is clicked.

## Customization
To customize the Web Notepad, you can modify the HTML, CSS, and JavaScript as needed. Add styles, change the appearance, or include new features to suit your specific requirements. Make sure to test the changes to ensure that the application continues to function correctly.

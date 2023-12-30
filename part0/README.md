# Part 0 - Exercises

## 0.4 New note diagram

  Create a diagram depicting the situation where the user creates a new note using the notes app at https://studies.cs.helsinki.fi/exampleapp/notes.

  ```mermaid
  sequenceDiagram
    participant browser
    participant server

    loop After creating a new note

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
      activate server
      server-->>browser: HTML document
      deactivate server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
      activate server
      server-->>browser: the css file
      deactivate server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
      activate server
      server-->>browser: the JavaScript file
      deactivate server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
      activate server
      server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
      deactivate server

      browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
      activate server
      server-->>browser: HTTP 302 redirect to /exampleapp/notes
      deactivate server

    end
  ```

## 0.5 Single page app diagram

  Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

  ```mermaid
  sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
  ```

## 0.6 New note in Single page app diagram

  Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

  ```mermaid
  sequenceDiagram
    participant browser
    participant server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
      activate server
      server-->>browser: HTML document
      deactivate server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
      activate server
      server-->>browser: the css file
      deactivate server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
      activate server
      server-->>browser: the JavaScript file
      deactivate server

      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
      activate server
      server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
      deactivate server

    loop After creating a new note

      browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa.json
      activate server
      server-->>browser: [{content: "single page app does not reload the whole page", date: "2019-05-25T15:15:59.905Z"}]
      deactivate server

    end
  ```
import * as React from "react";
import "./App.css";
import { TerminalContextProvider, ReactTerminal } from "react-terminal";
import FooterSection from "./FooterSection";
import NavBarSection from "./NavBarSection";

const App = () => {
  const [theme, setTheme] = React.useState("material-dark");
  const [controlBar, setControlBar] = React.useState(true);
  const [controlButtons, setControlButtons] = React.useState(true);
  const [prompt, setPrompt] = React.useState(">>>");

  const commands = {
    help: (
      <span>
        <strong>aof</strong> - my area of focus <br />
        <strong>clear</strong> - clears the console. <br />
        <br/>
        <strong>change_prompt &lt;PROMPT&gt;</strong> - Change the prompt of the
        terminal. <br />
        <strong>change_theme &lt;THEME&gt;</strong> - Changes the theme of the
        terminal. Allowed themes - light, dark, material-light, material-dark,
        material-ocean, matrix and dracula. <br />
        <strong>toggle_control_bar</strong> - Hides / Display the top control
        bar. <br />
        <strong>toggle_control_buttons</strong> - Hides / Display the top
        buttons on control bar. <br />
        <br />
        <strong>evaluate_math_expression &lt;EXPR&gt;</strong> - Evaluates a
        mathematical expression (eg, <strong>4*4</strong>) by hitting a public
        API, api.mathjs.org.
      </span>
    ),

    aof: (
      <span>
        Things that I did throughout my career: <br /><br />

              <table border="1">
          <tr>
              <th>Area of Focus</th>
              <th>Technologies</th>
          </tr>
          <tr>
              <td>Data Analytics</td>
              <td>Python, SQL</td>
          </tr>
          <tr>
              <td>Data Engineering</td>
              <td>JavaScript, Python, SQL, Amazon Web Services (AWS), Google Cloud Platform (GCP)</td>
          </tr>
          <tr>
              <td>DevOps</td>
              <td>Linux, Docker, Kubernetes, Jenkins, Ansible, Terraform, AWS, GCP</td>
          </tr>
          <tr>
              <td>Mobile Development</td>
              <td>Dart (Flutter)</td>
          </tr>
          <tr>
              <td>Systems Integration</td>
              <td>JavaScript, Python, SQL</td>
          </tr>
          <tr>
              <td>Web Development</td>
              <td>JavaScript, HTML, CSS, React, Node.js, Express, MongoDB</td>
          </tr>
      </table><br/>
      </span>
    ),

    change_prompt: (prompt) => {
      setPrompt(prompt);
    },

    change_theme: (theme) => {
      const validThemes = [
        "light",
        "dark",
        "material-light",
        "material-dark",
        "material-ocean",
        "matrix",
        "dracula",
      ];
      if (!validThemes.includes(theme)) {
        return `Theme ${theme} not valid. Try one of ${validThemes.join(", ")}`;
      }
      setTheme(theme);
    },

    toggle_control_bar: () => {
      setControlBar(!controlBar);
    },

    toggle_control_buttons: () => {
      setControlButtons(!controlButtons);
    },

    evaluate_math_expression: async (expr) => {
      const response = await fetch(
        `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expr)}`
      );
      return await response.text();
    },
  };

  const welcomeMessage = (
    <span>
      I'm <a href="https://linkedin.com/in/asmyio" target="_blank"><strong>Ahmad Siraj MY</strong></a> a well-rounded developer and I live in the terminal!<br /><br />
      Here's the tools that I use everyday: <br />
      JavaScript, Python, Bash, noSQL, SQL, Dart (Flutter), C/C++ <br/><br/>

Try to write "aof" and Enter to see what I did throughout my career or just write "help" and press Enter to see what you can do on this terminal.<br />
      <br />
    </span>
  );

  return (
    <div className="App">
       {/* NavBar */}
       <NavBarSection />
      <div className="asmyTerminal">
        {/* React Terminal */}
        <TerminalContextProvider>
          <ReactTerminal
            prompt={prompt}
            theme={theme}
            showControlBar={controlBar}
            showControlButtons={controlButtons}
            welcomeMessage={welcomeMessage}
            commands={commands}
            defaultHandler={(command, commandArguments) => {
              return `${command} passed on to default handler with arguments ${commandArguments}`;
            }}
          />
        </TerminalContextProvider>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
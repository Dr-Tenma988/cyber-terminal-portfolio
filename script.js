const input = document.getElementById('commandInput');
const output = document.getElementById('output');
const sidebar = document.getElementById('sidebar');

const commands = {
  help: `
Available commands:
- whoami       Show about info
- projects     List cybersecurity projects
- tools        Display tools & skills
- certs        Show certifications
- network      Show network layout
- clear        Clear the terminal
`,
  whoami: `
Name: YourAlias
Aspiring Cybersecurity Enthusiast
Always learning and exploring the digital frontier.
  `,
  projects: `
[1] Port Scanner (Python)
[2] XSS Detector (JavaScript)
[3] Wireshark Packet Sniffer Analysis
  `,
  tools: `
✓ Wireshark    ✓ Nmap
✓ Burp Suite   ✓ Metasploit
✓ Linux CLI    ✓ Hydra
  `,
  certs: `
- TryHackMe: Pre-Security
- Cybersecurity Essentials - Cisco
- Ethical Hacking Bootcamp - Udemy
  `,
  network: `
Network topology image displayed in sidebar.
  `
};

function showImage(src) {
  sidebar.innerHTML = `<img src="${src}" alt="Command image"/>`;
}

function processCommand(cmd) {
  const command = cmd.trim().toLowerCase();

  if (command === 'clear') {
    output.innerHTML = '';
    sidebar.innerHTML = '';
  } else {
    output.innerHTML += `<p class="command">> ${command}</p>`;
    if (commands[command]) {
      output.innerHTML += `<p>${commands[command]}</p>`;
      // Show image for specific commands
      if (command === 'network') {
        showImage('photos/Shinji_Bleach.jpg');
      }
      // You can add more image mappings here later
    } else {
      output.innerHTML += `<p>Command not found. Type 'help' for list of commands.</p>`;
    }
  }
  window.scrollTo(0, document.body.scrollHeight);
}

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const cmd = input.value;
    processCommand(cmd);
    input.value = '';
  }
});

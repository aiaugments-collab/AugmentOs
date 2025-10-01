<div align="center">
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)
<br />
</div>

## 
🌐 AugmentOS is a chromium fork that runs AI agents natively.

🔒 Privacy first - use your own API keys or run local models with Ollama. Your data stays on your computer.

💡 Help us build the future of AI-powered browsing!

## How AugmentOS Works

AugmentOS is built on Chromium with custom AI agent capabilities integrated directly into the browser. Here's how it works:

### Architecture Overview
- **Chromium Base**: Built on the latest Chromium source code for maximum compatibility
- **AI Agent Engine**: Custom-built AI agent system that runs natively in the browser
- **MCP Integration**: Model Context Protocol support for seamless AI tool integration
- **Privacy Layer**: All AI processing happens locally or with your own API keys

### Components
- **Browser Core**: Modified Chromium with AI agent capabilities
- **Landing Page**: Standalone Next.js marketing site (`/landing` directory)
- **AI Extensions**: Custom browser extensions for AI functionality
- **Agent Runtime**: Local AI agent execution environment

## Quick Start

1. Build and install AugmentOS from source (see build instructions below)
2. Import your Chrome data (optional)
3. Connect your AI provider (OpenAI, Anthropic, or local models via Ollama/LMStudio)
4. Start automating!

## What makes AugmentOS special
- 🏠 Feels like home - same familiar interface as Google Chrome, works with all your extensions
- 🤖 AI agents that run on YOUR browser, not in the cloud
- 🔒 Privacy first - bring your own keys or use local models with Ollama. Your browsing history stays on your computer
- 🚀 Community driven - see exactly what's happening under the hood
- 🤝 MCP store to one-click install popular MCPs and use them directly in the browser bar
- 🛡️ (coming soon) Built-in AI ad blocker that works across more scenarios!  

## Demos

AugmentOS provides powerful AI-powered browsing capabilities including:

- **AI Agent Automation**: Intelligent agents that can perform complex browsing tasks
- **Chat Integration**: Seamless AI chat functionality within the browser
- **Data Scraping**: Automated data extraction and processing capabilities

## Why We're Building AugmentOS

For the first time since Netscape pioneered the web in 1994, AI gives us the chance to completely reimagine the browser. We've seen tools like Cursor deliver 10x productivity gains for developers—yet everyday browsing remains frustratingly archaic.

You're likely juggling 70+ tabs, battling your browser instead of having it assist you. Routine tasks, like "reorder Tide Pods from my Amazon history," should be handled seamlessly by intelligent AI agents.

At AugmentOS, we're convinced that AI should empower you by automating tasks locally and securely—keeping your data private. We are building the best browser for this future!

## How we compare

<details>
<summary><b>vs Chrome</b></summary>
<br>
While we're grateful for Google open-sourcing Chromium, but Chrome hasn't evolved much in 10 years. No AI features, no automation, no MCP support.
</details>

<details>
<summary><b>vs Brave</b></summary>
<br>
We love what Brave started, but they've spread themselves too thin with crypto, search, VPNs. We're laser-focused on AI-powered browsing.
</details>

<details>
<summary><b>vs Arc/Dia</b></summary>
<br>
Many loved Arc, but it was closed source. When they abandoned users, there was no recourse. We're community-driven and transparent!
</details>

<details>
<summary><b>vs Perplexity Comet</b></summary>
<br>
They're a search/ad company. Your browser history becomes their product. We keep everything local.
</details>

## Landing Page

The `/landing` directory contains a standalone Next.js marketing/landing page that can be hosted independently on Vercel or any other hosting platform.

### Deploying the Landing Page
```bash
cd landing
npm install
npm run build
npm run start
```

For Vercel deployment:
```bash
cd landing
vercel --prod
```

The landing page is completely independent and can be updated without affecting the main browser application.

## Building AugmentOS

### Prerequisites
- Python 3.8+
- Node.js 16+
- Git
- Platform-specific build tools (see below)

### Build Instructions

#### macOS
```bash
# Install Xcode command line tools
xcode-select --install

# Install depot_tools
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH="$PATH:/path/to/depot_tools"

# Build AugmentOS
cd packages/browseros
./build_mac.sh
```

#### Windows
```bash
# Install Visual Studio Build Tools
# Install Windows 10 SDK

# Install depot_tools
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
set PATH=%PATH%;C:\path\to\depot_tools

# Build AugmentOS
cd packages/browseros
build_win.bat
```

#### Linux
```bash
# Install build dependencies
sudo apt-get update
sudo apt-get install -y build-essential libnss3-dev libatk-bridge2.0-dev libdrm2 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libxss1 libasound2

# Install depot_tools
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH="$PATH:/path/to/depot_tools"

# Build AugmentOS
cd packages/browseros
./build_linux.sh
```

### Development Build
For development and testing:
```bash
cd packages/browseros
./dev_build.sh
```

This creates a development build with debugging enabled and faster compilation times.

## Contributing

We'd love your help making AugmentOS better!

- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🚀 Contribute code and improvements

## License

AugmentOS is licensed under the [AGPL-3.0 license](LICENSE).

## 

<p align="center">
Built with ❤️ for the community
</p>

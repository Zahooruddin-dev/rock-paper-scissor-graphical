# 🎮 Rule of Three: Miuzka - Rock Paper Scissors Battle Game

A stunning, fully-animated Rock Paper Scissors game featuring epic anime-inspired character battles, dynamic card displays, immersive sound effects, and heart-based health system. Built with vanilla JavaScript, HTML5, and CSS3 for maximum performance and compatibility.

**GitHub**: [zahooruddin-dev](https://github.com/zahooruddin-dev)  
**Email**: mzkhan886@gmail.com

---

## ✨ Features

### 🎬 Cinematic Animations
- **Smooth Scroll Animations**: Elegant easing transitions that guide players from the main menu into the battle arena with precision-timed orchestration
- **Character Sprite Animation**: Idle breathing animations for both player and computer characters that loop continuously, bringing life to the battlefield
- **Card Reveal Effects**: Dynamic card animations that slide in from opposite directions with fade-in/fade-out transitions creating dramatic tension during each match
- **Victory Animations**: Exclusive attack animations for winning characters that trigger upon successful match wins, adding celebratory flair
- **Hover Effects**: Interactive choice buttons that scale up smoothly when hovered, providing intuitive visual feedback with transitions reaching up to 6rem in size

### 🎵 Immersive Audio Design
- **Background Music**: Full-length Jujutsu Kaisen Opening 3 (4K 60FPS Creditless) that plays at optimized 0.2 volume to enhance atmosphere without overwhelming
- **Sound Effects**: Strategic audio cues including hover sounds, button click confirmations, and impact audio that trigger at precise moments during gameplay
- **Volume Control**: Individually configured audio channels allowing players to control background music and SFX independently

### ❤️ Progressive Difficulty System
- **5-Life System**: Both player and computer start with 5 hearts displayed as visual representations, removing 2 hearts per loss (aggressive escalation)
- **Elimination Mechanics**: First player to reach 0 hearts loses the game, triggering the game-over sequence and results screen
- **Visual Health Tracking**: Real-time heart count displayed above each character, making stakes immediately apparent

### 🎯 Advanced Game Logic
- **Perfect Rock-Paper-Scissors Algorithm**: Mathematically accurate win/loss/draw detection with comprehensive case handling
- **Smart Computer AI**: Randomly generated computer choices ensuring unpredictability and replayability
- **Win/Loss/Draw Handling**: Distinct code paths for all three outcomes with appropriate animations and feedback for each scenario

### 🎨 Stunning Visual Design
- **Custom Background Imagery**: Atmospheric background that sets anime-inspired tone throughout the experience
- **Sprite-Based Characters**: Multi-frame character animations using image sequences for smooth 24fps-equivalent animation
- **Card System**: Detailed card graphics for rock, paper, and scissors choices with professional sizing and positioning
- **Responsive Layout**: Flexible grid and flexbox layouts that maintain visual integrity across different viewport sizes

---

## 🛠️ Technical Architecture

### Project Structure
```
├── index.html                 # Main HTML structure with semantic layout
├── main.js                    # Entry point and event listener orchestration
├── style.css                  # Comprehensive styling with transitions/animations
└── scripts/
    ├── matchLogic.js          # Core game match logic and animation sequencing
    └── animationsScripts/
        ├── animationOfCharacters.js    # Character sprite loop management
        └── animationOfScroll.js        # Smooth scroll implementation
```

### Core Components

**matchAnimation(player, computer)**  
Orchestrates the entire match sequence:
- Hides the choice UI with 0.5s fade transition and 20px margin offset
- Dynamically loads and displays card images for player and computer choices
- Executes card animations with 2-second display window and 0.6s ease-out transitions
- Determines winner using `winnerOfMatch()` algorithm
- Triggers character animations and heart removal logic
- Manages game-over state detection and victory screen display
- Resets UI after 3000ms for next round

**winnerOfMatch(player, computer)**  
Mathematically precise match determination:
- Evaluates all 9 possible game states (3 choices × 3 choices)
- Returns "player", "computer", or false (draw)
- Uses strict equality checks for reliable type matching
- Implements classic rules: Rock > Scissors > Paper > Rock

**Character Animation System**  
Dual-layer animation controller:
- `startCharAnimation()`: Initiates 700ms-interval loop toggling between 2-frame sprite sequences
- `stopCharAnimation()`: Halts loops before victory animations trigger
- Prevents animation conflicts through explicit state management

**Smooth Scroll Implementation**  
Advanced easing-based scroll controller:
- `smoothScrollTo(endX, endY, duration)`: Targets scroll position with custom duration
- Implements easeInOutQuart algorithm for sophisticated motion curves
- Maintains 60fps target through setInterval at 1000/60ms intervals
- Powers the dramatic menu-to-arena transition (0→800px over 2100ms)

---

## 🎮 Gameplay Flow

1. **Menu Screen**: Player views title and start prompt with background music beginning on first click
2. **Smooth Transition**: Screen scrolls elegantly from menu (0px) to battle arena (800px) over 2.1 seconds
3. **Character Selection**: Player hovers over and clicks rock, paper, or scissor choice from 3-button interface
4. **Match Execution**: 
   - Choices hide with fade transition
   - Cards animate in from opposite sides simultaneously
   - Cards display for 2 seconds then fade out
   - Character animations play if there's a winner
   - 2 hearts removed from loser's count
5. **Round Reset**: UI reappears after 3 seconds for next match
6. **Victory Condition**: First player to survive all 5 rounds wins, triggering celebratory results screen
7. **Game Over**: Victory image and restart prompt display; page reload to restart

---

## 🚀 Getting Started

### Installation
1. Clone the repository from GitHub (zahooruddin-dev)
2. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
3. No build tools or dependencies required—pure vanilla JavaScript
4. Ensure all asset files in `./img/` and `./music/` directories are present

### Requirements
- Modern browser supporting ES6 modules
- All image assets properly pathed in `./img/` subdirectories
- Audio files in `./music/` directory
- JavaScript enabled

### File Structure
```
project-root/
├── index.html
├── main.js
├── style.css
├── music/
│   ├── Jujutsu Kaisen - Opening 3.mp3
│   ├── selectedButton.mp3
│   └── hoverAudio.mp3
├── img/
│   ├── Rock Paper and Scissor.png
│   ├── click on screen for start.png
│   ├── cards/
│   │   ├── rock card.png
│   │   ├── paper card.png
│   │   └── scissor card.png
│   ├── playerCharFolder/
│   │   ├── playerChar0.png
│   │   ├── playerChar1.png
│   │   └── ... (up to playerChar4.png)
│   ├── computerCharFolder/
│   │   ├── computerChar0.png
│   │   ├── computerChar1.png
│   │   └── ... (up to computerChar4.png)
│   ├── singleHeartRed.png
│   ├── resultsOfGame/
│   │   ├── Player win.png
│   │   ├── Computer win.png
│   │   └── rick-roll.png
│   └── novo-bg.jpg
└── scripts/
    ├── matchLogic.js
    └── animationsScripts/
        ├── animationOfCharacters.js
        └── animationOfScroll.js
```

---

## 🎨 Customization Guide

### Adjusting Difficulty
Modify heart removal in `matchLogic.js`:
```javascript
// Change from 2 hearts per loss to 1 heart
computerHearts.removeChild(computerHearts.firstChild);
// Remove the second removeChild call to make game easier
```

### Changing Audio Levels
Update volume values in `main.js`:
```javascript
audio.volume = 0.8;        // SFX volume (default: 0.8)
audiobg.volume = 0.2;      // BGM volume (default: 0.2)
```

### Modifying Animation Timings
Key animation durations throughout project:
- Choice fade-out: 500ms (line 11 in matchLogic.js)
- Card display window: 2000ms (line 50)
- UI reset: 1000ms (line 127)
- UI fade-in: 3000ms (line 133)
- Scroll transition: 2100ms (main.js)
- Character sprite loop: 700ms (animationOfCharacters.js)

### Changing Character Sprites
Replace image paths in `matchLogic.js` (lines 22-39) and `animationOfCharacters.js` to use custom sprite sheets. Ensure sequential naming (char0.png, char1.png, etc.)

---

## 🔧 Technical Highlights

### Performance Optimizations
- **Efficient DOM Querying**: Elements cached in variables to avoid repeated querySelector calls
- **Hardware-Accelerated Animations**: CSS transitions leverage GPU acceleration for smooth 60fps performance
- **Strategic setInterval Usage**: Animation loops properly cleared to prevent memory leaks
- **Minimal Reflow/Repaint**: Position and opacity changes prioritized over layout-affecting properties

### Browser Compatibility
- Modern ES6 module syntax supported across all current browsers
- CSS Grid and Flexbox for reliable layout
- Audio element with fallback source attribute
- Transform-based animations for cross-browser compatibility

### Code Quality
- Modular architecture with clear separation of concerns
- Exported functions for reusable animation controls
- Comprehensive switch statements for type matching
- Try-catch error handling for game-over detection

---

## 🎯 Advanced Features

### Smart Game-Over Detection
```javascript
try {
    computerHearts.removeChild(computerHearts.firstChild);
    computerHearts.removeChild(computerHearts.firstChild);
    if (computerHearts.childNodes.length <= 1) {
        throw new Error("Last Heart");
    }
} catch(error) {
    // Victory screen triggers automatically
}
```
This elegant pattern removes hearts and triggers win condition when final heart approaches, creating seamless game progression.

### Easing Algorithm Implementation
The smooth scroll uses easeInOutQuart for sophisticated motion:
```javascript
const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
};
```
Creates acceleration/deceleration curves that make transitions feel premium and intentional rather than linear.

### Event Delegation Pattern
Single click event listener on `#chooses` div handles all three button types via `e.target.alt` attribute, demonstrating efficient event handling for scalability.

---

## 📝 License & Attribution

**Feel free to use this project!** Fork it, modify it, learn from it, deploy it. This is a fully open-source gaming experience designed for enjoyment and education.

**Original Developer**: [Zahooruddin-dev](https://github.com/zahooruddin-dev)  
**Contact**: mzkhan886@gmail.com  
**Background Music**: Jujutsu Kaisen Opening 3 (4K 60FPS Creditless)

---

## 🐛 Known Limitations & Future Enhancements

### Current Limitations
- Game-over screen requires page reload to restart (intentional for epic effect)
- Computer AI is purely random (no difficulty levels)
- Single-player vs computer only (no multiplayer support)
- Fixed 5-heart system (no adjustable difficulty settings)

### Potential Enhancements
- Add difficulty modes (Easy: 1 heart/loss, Hard: 3 hearts/loss)
- Implement persistent score tracking with localStorage
- Add multiplayer mode via WebSockets
- Create custom sprite/card packs
- Add sound mute button and settings menu
- Implement animated particle effects during victories
- Add combo counter for consecutive wins
- Create ranked leaderboard system

---

## 📊 Code Statistics

- **Total Lines of Code**: ~400+ (across all files)
- **Animation Sequences**: 8+ distinct animation types
- **Audio Cues**: 3+ different sound effects
- **Game States**: 5+ distinct gameplay states
- **Event Listeners**: 4+ interactive event handlers

---

## 🙏 Thank You

Thank you for checking out this project! Whether you're learning from the code, enjoying the gameplay, or building upon it, we hope it brings you joy. If you create something amazing with this foundation, we'd love to hear about it!

**Questions or Feedback?** Reach out to mzkhan886@gmail.com

---

**Last Updated**: January 2026  
**Status**: Complete & Stable  
**Version**: 1.2.0  


---

*"The rule of three is simple: you choose, the computer chooses, and destiny chooses the winner!"* 🎮✨
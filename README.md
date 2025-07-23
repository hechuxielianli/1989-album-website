# 1989 Album Show Website

Coded for XJTUSE front-end development short course.
Finished on 2025-07-23.

A responsive web experience dedicated to Taylor Swift's iconic album "1989". This fan-made website offers comprehensive information about the album, interactive features, and a seamless user experience for Swifties and music enthusiasts alike.

![1989 Album Cover](https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png)

## 📌 Features

- **Home Page**: Showcases the album cover, Taylor's Version update, and music video carousel
- **Lyrics Page**: Complete lyrics for all songs with an easy navigation system
- **Profile Page**: Detailed album information, tracklist, polaroid gallery, and awards highlights
- **Stream Page**: Links to multiple streaming platforms with a centralized interface
- **Login System**: User authentication for personalized experience

## 🚀 Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with flexbox layouts and responsive design
- **JavaScript**: Interactive elements including carousel, modal windows, and dynamic content loading
- **External Libraries**: Font Awesome for icons

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Design Features

- **Color Scheme**: Blue and white palette inspired by the 1989 album aesthetic
- **Typography**: Clean, modern fonts for optimal readability
- **Visual Elements**: Album polaroids, consistent dividers, and carefully selected imagery
- **Navigation**: Intuitive menu system with consistent layout across all pages

## 🖥️ Pages Overview

### Home Page (index.html)
The landing page featuring the album cover, Taylor's Version announcement, and a carousel of music videos from the album.

### Lyrics Page (LyricsPage.html)
Interactive lyrics viewer with a song selection sidebar and detailed lyrics display including verse markers.

### Profile Page (Profile.html)
Comprehensive album information including:
- Album introduction and background
- Complete tracklist with playback controls
- Scrolling polaroid gallery
- Extensive awards and accolades section

### Stream Page (StreamPage.html)
Central hub for accessing the album across multiple streaming platforms:
- Official Taylor Swift website
- Apple Music
- Spotify
- NetEase Music
- QQ Music
- Amazon Music
- YouTube Music

### Login Page (Login.html)
User authentication system for account creation and login.

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hechuxielianli/1989-album-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd 1989-album-website
   ```

3. Open any HTML file in your browser to view the website, or set up a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   ```

4. Access the website at `http://localhost:8000`

## 🔮 Future Enhancements

- Backend integration for user authentication
- Community features for fans to interact
- Additional album content and Easter eggs
- Music player functionality
- Comment system for songs and videos

## 📝 Project Structure

```
1989-album-website/
│
├── index.html              # Home page
├── LyricsPage.html         # Lyrics page
├── Profile.html            # Album profile page
├── StreamPage.html         # Streaming platforms page
├── Login.html              # User login page
│
├── css/                    # CSS stylesheets
│   ├── HomePage_Style.css
│   ├── LyricsPage_Style.css
│   ├── Profile_Style.css
│   ├── StreamPage.css
│   └── Login_Style.css
│
├── js/                     # JavaScript files
│   ├── carousel.js         # Carousel functionality
│   ├── tracklist.js        # Tracklist interaction
│   ├── LyricsPage_JS.js    # Lyrics page functionality
│   └── Login.js            # Login system
│
└── images/                 # Image assets
    ├── cover.png           # Album cover
    ├── icon.png            # Website icon
    ├── polaroids/          # Album polaroid images
    ├── mv/                 # Music video thumbnails
    └── logo/               # Streaming platform logos
    └── ...
```

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👩‍💻 Author

Created with 💙 by [Huang Zhanpeng]

## 🙏 Acknowledgements

- Taylor Swift and her incredible "1989" album
- Font Awesome for the icon library
- All Swifties who inspired this project

---

*Note: This is a fan-made website created for educational purposes. All rights to the "1989" album and related content belong to Taylor Swift and her record labels.*
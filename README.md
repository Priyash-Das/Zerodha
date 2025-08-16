# 🪙 Zerodha Trading Platform Clone 

A comprehensive full-stack trading platform clone inspired by Zerodha, featuring a modern dashboard for portfolio management, trading operations, and a professional landing page.

---
---

![Zerodha](https://github.com/Priyash-Das/Photos/blob/main/Zerodha%20Banner.png)

---
---

## 🚀 Project Overview

> This project is a complete trading platform clone that replicates core Zerodha functionality including portfolio tracking, order management, position monitoring, and a professional marketing website. Built with modern web technologies, it provides a realistic trading experience with real-time data visualization and comprehensive portfolio analytics.

Architecture

The project follows a **three-tier architecture**:

> - **Frontend**: Marketing website and user interface
> - **Dashboard**: Trading platform and portfolio management
> - **Backend**: RESTful API server with MongoDB database

---
---

## 📸 Screenshots & 📽️ Demo Video

👉 [Click here for Screenshots]()

👉 [Click here for Video]()

---
---

## ✨ Features

### Trading Dashboard

- **Portfolio Summary**: Real-time overview of equity, margin, and holdings
- **Holdings Management**: Track stock positions with P&L calculations
- **Position Monitoring**: Monitor active trading positions
- **Order Management**: Place buy/sell orders with quantity and price controls
- **Watchlist**: Custom stock watchlist functionality
- **Funds Overview**: Account balance and margin utilization tracking
- **Interactive Charts**: Chart.js integration for data visualization
- **Responsive Design**: Material-UI components for modern UI/UX
- **Navigation Menu**: Sidebar navigation with routing
- **Top Bar**: Header component with user information
- **Context Management**: React context for state management

### Marketing Website

- **Landing Page**: Professional hero section with call-to-action
- **Product Showcase**: Kite, Console, Coin, and other trading tools
- **Pricing Information**: Transparent fee structure and account types
- **About Section**: Company information and team details
- **Support Portal**: Customer service and help resources
- **Account Opening**: Streamlined signup process
- **Navigation Bar**: Responsive navigation with routing
- **Footer**: Comprehensive footer with links and information
- **404 Page**: Custom not found page

### Backend Services

- **RESTful API**: Express.js server with comprehensive endpoints
- **Database Integration**: MongoDB with Mongoose ODM
- **Data Models**: Holdings, Positions, and Orders schemas
- **Authentication**: Passport.js integration for user management
- **CORS Support**: Cross-origin resource sharing enabled

---
---

## 🛠️ Tools & Tech Stack

### Frontend Technologies
```
- React 19.1.0: Modern React with latest features
- React Router DOM 7.7.1: Client-side routing
- Bootstrap 5.3.7: Responsive CSS framework
- Bootstrap Icons 1.13.1: Icon library
- Axios 1.11.0: HTTP client for API calls
```

### Dashboard Technologies
```
- Material-UI 7.3.1: React component library
- Chart.js 4.5.0: Data visualization library
- React Chart.js 2 5.3.0: React wrapper for Chart.js
- Emotion 11.14.0: CSS-in-JS styling solution
- React 19.1.1: Latest React version
```

### Backend Technologies
```
- Node.js: JavaScript runtime environment
- Express.js 5.1.0: Web application framework
- MongoDB: NoSQL database
- Mongoose 8.17.1: MongoDB object modeling
- Passport.js 0.7.0: Authentication middleware
- Passport Local 1.0.0: Local authentication strategy
- Passport Local Mongoose 8.0.0: Mongoose integration for Passport
- Body Parser 2.2.0: Request body parsing
- CORS 2.8.5: Cross-origin resource sharing
- Dotenv 17.2.1: Environment variable management
```

### Development Tools
```
- Nodemon 3.1.10: Development server with auto-restart
- React Scripts 5.0.1: Create React App build tools
- ESLint: Code quality and consistency
```

---
---

## 📁 Folder Structure

```
Zerodha/
├── backend/                 # Node.js API server
│   ├── index.js            # Main server file
│   ├── model/              # Database models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/            # MongoDB schemas
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   └── package.json
├── dashboard/              # Trading platform React app
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Dashboard.js
│   │   │   ├── Holdings.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   ├── WatchList.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── BuyActionWindow.css
│   │   │   ├── DoughnoutChart.js
│   │   │   ├── VerticalGraph.js
│   │   │   ├── Menu.js
│   │   │   ├── TopBar.js
│   │   │   ├── Home.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Funds.js
│   │   │   └── Apps.js
│   │   └── index.js
│   └── package.json
└── frontend/               # Marketing website React app
    ├── src/
    │   ├── landing-page/   # Landing page components
    │   │   ├── home/        # Homepage sections
    │   │   ├── pricing/     # Pricing information
    │   │   ├── products/    # Product showcase
    │   │   ├── about/       # Company information
    │   │   ├── support/     # Support resources
    │   │   └── signup/      # Account creation
    │   └── index.js
    └── package.json
```

---
---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- npm or yarn package manager

### Backend Setup

```bash
cd backend
npm install
# Create .env file with MONGO_URL
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

### Dashboard Setup

```bash
cd dashboard
npm install
npm start
# Runs on http://localhost:3001 (make sure the port should be 3001)
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=8080
```

---
---

## 🔧 API Endpoints

- `GET /allHoldings` - Retrieve all portfolio holdings
- `GET /allPositions` - Get active trading positions
- `POST /newOrder` - Place new buy/sell orders

## 📊 Data Models

### Holdings Schema

- `name`: Stock symbol/name
- `qty`: Quantity held
- `avg`: Average purchase price
- `price`: Current market price
- `net`: Net change percentage
- `day`: Daily change percentage

### Orders Schema

- `name`: Stock symbol
- `qty`: Order quantity
- `price`: Order price
- `mode`: Buy/Sell mode (optional)

### Positions Schema

- `product`: Product type (CNC, MIS, etc.)
- `name`: Stock symbol
- `qty`: Position quantity
- `avg`: Average price
- `price`: Current price
- `net`: Net P&L percentage
- `day`: Daily P&L percentage
- `isLoss`: Loss indicator (optional boolean)

---
---

## 🔮 Future Enhancements

- Real-time market data integration
- Advanced charting capabilities
- Mobile app development
- User authentication and authorization
- Real-time notifications
- Advanced order types (stop-loss, limit orders)
- Portfolio analytics and reporting

---
---

## 📝 Notes

This project serves as a comprehensive demonstration of building a full-stack trading platform with modern web technologies. It showcases best practices in React development, Node.js backend architecture, and database design. The modular structure allows for easy extension and customization of trading features.

The project successfully replicates core Zerodha functionality while maintaining clean, maintainable code architecture suitable for production deployment with additional security and performance optimizations.

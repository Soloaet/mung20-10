body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    text-align: center;
}

.container {
    position: relative;
}

h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
    color: #ff5252;
}

p {
    font-size: 1.2rem;
    color: #333;
}

button {
    background-color: #ff5252;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #ff7a7a;
}

.heart-icon {
    font-size: 3rem;
    color: #ff5252;
    margin-top: 20px;
}

.message {
    font-size: 1.5rem;
    margin-top: 20px;
    animation: fadeIn 1.5s ease;
}

.hidden {
    display: none;
}

#heartContainer {
    position: absolute;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden; /* Đảm bảo trái tim không vượt ra ngoài màn hình */
}

.heart {
    position: absolute;
    font-size: 2rem;
    color: #ff5252;
    animation: float 3s ease-in-out forwards;
    transform: translateY(0);
    opacity: 1;
}

@keyframes float {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-150px) scale(1.5);
        opacity: 0;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

import React, { useEffect } from 'react';
import { useReward } from 'react-rewards';
import './AchievementCard.css'; // Update your CSS here
import { FaFacebook, FaWhatsapp, FaDownload } from 'react-icons/fa'; // Icons

const AchievementCard = ({ badgeImage }) => {
  const { reward } = useReward('confettiReward', 'confetti', {
    elementCount: 250,  // More confetti
    spread: 60,        // Wider confetti spread
    startVelocity: 60,  // Faster confetti launch
  });

  useEffect(() => {
    reward(); // Trigger confetti on page load
  }, [reward]);

  return (
    <div className="achievement-card-container">
      <div id="confettiReward" />
      <div className="achievement-card">
        <img src={badgeImage} alt="Badge" className="badge-image" />
        <h2>Achievement Unlocked!</h2>
        <p className="badge-text">You have earned a new badge!</p>
        <p className="share-text">Share with others!</p>
        <div className="share-options">
          <FaWhatsapp className="icon whatsapp" />
          <FaFacebook className="icon facebook" />
          <FaDownload className="icon download" />
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;

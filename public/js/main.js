/**
 * DEVELOPER PORTFOLIO - MAIN INTERACTION SCRIPT (VANILLA JS)
 * @license Apache-2.0
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // 1. Navigation Smooth Scroll Adjustments
  // ==========================================================================
  const navLinks = document.querySelectorAll('.nav-item, .mobile-nav-item, .logo-link, #btn-view-projects, #btn-go-contact, .back-to-top');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Handle standard anchor links starting with #
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Close mobile menu drawer if it is open
          closeMobileMenu();
          
          // Smooth scroll to target element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Header background switch on scroll
  const header = document.getElementById('portfolio-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  // ==========================================================================
  // 2. Active Section Navigation Highlighter (Intersection Observer)
  // ==========================================================================
  const sections = document.querySelectorAll('.scroll-section');
  const navItems = document.querySelectorAll('.nav-item');
  const mobNavItems = document.querySelectorAll('.mobile-nav-item');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active view space
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Highlight Desktop items
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });

        // Highlight Mobile items
        mobNavItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  // ==========================================================================
  // 3. Mobile Hamburger Menu Toggle
  // ==========================================================================
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu');

  if (menuToggleBtn && mobileMenuDrawer) {
    menuToggleBtn.addEventListener('click', () => {
      const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    menuToggleBtn.setAttribute('aria-expanded', 'true');
    menuToggleBtn.setAttribute('aria-label', '메뉴 닫기');
    mobileMenuDrawer.classList.add('open');
    mobileMenuDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  }

  function closeMobileMenu() {
    if (menuToggleBtn && mobileMenuDrawer) {
      menuToggleBtn.setAttribute('aria-expanded', 'false');
      menuToggleBtn.setAttribute('aria-label', '메뉴 열기');
      mobileMenuDrawer.classList.remove('open');
      mobileMenuDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore background scrolling
    }
  }


  // ==========================================================================
  // 4. Project Details Expand / Collapse (Accordion)
  // ==========================================================================
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const projectId = trigger.getAttribute('data-project-id');
      const panel = document.getElementById(`details-${projectId}`);
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      
      // Close all other panels for clean UX (optional, can keep multiple open if preferred,
      // but let's toggle individually to follow standard user expectations)
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');
        panel.style.maxHeight = '0px';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
        // Calculate and set explicit height for smooth transition
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });


  // ==========================================================================
  // 5. Scroll Appearance Fade-up Effect (Intersection Observer)
  // ==========================================================================
  // Let's add scroll reveal class to major block elements
  const revealElements = document.querySelectorAll('.project-card, .skill-card, .timeline-card, .chat-interface-wrapper, .contact-card-box');
  
  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before the card enters view
    threshold: 0.05
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to track again
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  // ==========================================================================
  // 6. Technology Cards Interaction (Highlight Related Projects)
  // ==========================================================================
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    // Desktop hover events
    card.addEventListener('mouseenter', () => {
      highlightRelatedProjects(card, true);
    });
    
    card.addEventListener('mouseleave', () => {
      highlightRelatedProjects(card, false);
    });

    // Keyboard focus events for high accessibility
    card.addEventListener('focusin', () => {
      highlightRelatedProjects(card, true);
    });

    card.addEventListener('focusout', () => {
      highlightRelatedProjects(card, false);
    });
  });

  function highlightRelatedProjects(skillCard, shouldHighlight) {
    const rawIds = skillCard.getAttribute('data-project-ids');
    if (!rawIds) return;

    const projectIds = rawIds.split(',').map(id => id.trim());
    
    projectIds.forEach(id => {
      const projectCard = document.getElementById(`project-card-${id}`);
      if (projectCard) {
        if (shouldHighlight) {
          projectCard.classList.add('highlighted');
        } else {
          projectCard.classList.remove('highlighted');
        }
      }
    });
  }


  // ==========================================================================
  // 7. Interactive Q&A Chat Section (Local Engine)
  // ==========================================================================
  const qnaButtons = document.querySelectorAll('.qna-query-btn');
  const chatMessagesBox = document.getElementById('chat-messages-box');
  let isTyping = false;

  qnaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Prevent multiple parallel question submissions during chatbot reply delay
      if (isTyping) return;

      const qnaId = btn.getAttribute('data-qna-id');
      const question = btn.getAttribute('data-question');
      const answer = btn.getAttribute('data-answer');

      // Highlight selected button
      qnaButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // 1. Append User Message Bubble
      appendChatMessage('user', '👤', question);
      scrollToLatestMessage();

      // 2. Append Chatbot Typing Indicator
      isTyping = true;
      const typingIndicatorId = appendTypingIndicator();
      scrollToLatestMessage();

      // 3. Simulate natural chatbot thinking delay
      setTimeout(() => {
        // Remove typing indicator
        const indicatorEl = document.getElementById(typingIndicatorId);
        if (indicatorEl) indicatorEl.remove();

        // Append Chatbot Answer Bubble
        appendChatMessage('bot', '🤖', answer);
        isTyping = false;
        scrollToLatestMessage();
      }, 700); // 700ms elegant response latency
    });
  });

  function appendChatMessage(sender, avatar, text) {
    const messageRow = document.createElement('div');
    messageRow.className = `message-row ${sender}`;
    
    const avatarEl = document.createElement('div');
    avatarEl.className = 'message-avatar';
    avatarEl.textContent = avatar;

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'message-bubble';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    
    bubbleEl.appendChild(paragraph);
    messageRow.appendChild(avatarEl);
    messageRow.appendChild(bubbleEl);
    
    chatMessagesBox.appendChild(messageRow);
  }

  function appendTypingIndicator() {
    const indicatorId = 'typing-indicator-' + Date.now();
    const messageRow = document.createElement('div');
    messageRow.className = 'message-row bot';
    messageRow.id = indicatorId;
    
    const avatarEl = document.createElement('div');
    avatarEl.className = 'message-avatar';
    avatarEl.textContent = '🤖';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'message-bubble';
    
    const typingContainer = document.createElement('div');
    typingContainer.className = 'typing-indicator';
    
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.className = 'typing-dot';
      typingContainer.appendChild(dot);
    }
    
    bubbleEl.appendChild(typingContainer);
    messageRow.appendChild(avatarEl);
    messageRow.appendChild(bubbleEl);
    
    chatMessagesBox.appendChild(messageRow);
    return indicatorId;
  }

  function scrollToLatestMessage() {
    chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
  }


  // ==========================================================================
  // 8. Contact Section Placeholder Link Validation
  // ==========================================================================
  const contactLinks = document.querySelectorAll('.contact-button-link');
  const alertModal = document.getElementById('alert-modal');
  const alertMessageText = document.getElementById('alert-message-text');
  const alertCloseBtn = document.getElementById('alert-close-btn');

  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const value = link.getAttribute('data-value');
      const type = link.getAttribute('data-type');
      
      // Determine if value contains a bracket placeholder, indicating it hasn't been filled
      const isPlaceholder = value.includes('[') || value.includes('입력');
      
      if (isPlaceholder) {
        e.preventDefault(); // Stop execution
        
        // Show informative alert modal rather than routing
        showAlertModal(type);
      }
    });
  });

  if (alertCloseBtn && alertModal) {
    alertCloseBtn.addEventListener('click', hideAlertModal);
    alertModal.addEventListener('click', (e) => {
      if (e.target === alertModal) {
        hideAlertModal();
      }
    });
    
    // Accessibility: Keyboard support for closing modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && alertModal.classList.contains('open')) {
        hideAlertModal();
      }
    });
  }

  function showAlertModal(linkType) {
    if (alertModal && alertMessageText) {
      alertMessageText.innerHTML = `현재 김재훈 엔지니어의 <strong>${linkType} 정보</strong>는 준비 중이거나 플레이스홀더 상태입니다.<br><br>추후 포트폴리오 관리가 활성화되는 시점에 실제 연락 규격으로 연동될 예정이오니 양해 부탁드립니다!`;
      alertModal.classList.add('open');
      alertModal.setAttribute('aria-hidden', 'false');
      alertCloseBtn.focus();
    }
  }

  function hideAlertModal() {
    if (alertModal) {
      alertModal.classList.remove('open');
      alertModal.setAttribute('aria-hidden', 'true');
    }
  }

});

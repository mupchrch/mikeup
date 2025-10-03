import { useRef, useState, useEffect, useCallback } from 'react';

const useSpin = (centerX = 0.5, centerY = 0.5) => {
  const svgRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const dragStartRef = useRef({ angle: 0, rotation: 0 });
  const lastDragRef = useRef({ angle: 0, time: 0 });
  const animationFrameRef = useRef(null);

  // Calculate angle from center to point
  const getAngle = useCallback(
    (clientX, clientY) => {
      if (!svgRef.current) return 0;
      const rect = svgRef.current.getBoundingClientRect();
      const centerPx = rect.left + rect.width * centerX;
      const centerPy = rect.top + rect.height * centerY;
      const dx = clientX - centerPx;
      const dy = clientY - centerPy;
      return Math.atan2(dy, dx) * (180 / Math.PI);
    },
    [centerX, centerY],
  );

  // Handle drag move
  const handleMove = useCallback(
    (clientX, clientY) => {
      if (!isDragging) return;

      const currentAngle = getAngle(clientX, clientY);
      const angleDelta = currentAngle - dragStartRef.current.angle;
      const newRotation = dragStartRef.current.rotation + angleDelta;
      setRotation(newRotation);

      // Calculate velocity for inertia
      const now = Date.now();
      const timeDelta = now - lastDragRef.current.time;
      if (timeDelta > 0) {
        let angleDiff = currentAngle - lastDragRef.current.angle;
        // Handle angle wrapping (e.g., -179 to 179)
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        const vel = (angleDiff / timeDelta) * 30;
        setVelocity(vel);
      }
      lastDragRef.current = { angle: currentAngle, time: now };
    },
    [isDragging, getAngle],
  );

  const handleMouseMove = useCallback(
    (e) => {
      handleMove(e.clientX, e.clientY);
    },
    [handleMove],
  );

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    },
    [handleMove],
  );

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle drag start (mouse)
  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
      const angle = getAngle(e.clientX, e.clientY);
      dragStartRef.current = { angle, rotation };
      lastDragRef.current = { angle, time: Date.now() };
      setVelocity(0);
    },
    [rotation, getAngle],
  );

  // Handle drag start (touch)
  const handleTouchStart = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
      const touch = e.touches[0];
      const angle = getAngle(touch.clientX, touch.clientY);
      dragStartRef.current = { angle, rotation };
      lastDragRef.current = { angle, time: Date.now() };
      setVelocity(0);
    },
    [rotation, getAngle],
  );

  // Apply inertia effect when not dragging
  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > 0.1) {
      const animate = () => {
        setRotation((prev) => prev + velocity);
        setVelocity((prev) => prev * 0.95); // Friction factor

        if (Math.abs(velocity) > 0.1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, velocity]);

  // Add global mouse/touch event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      document.addEventListener('touchend', handleDragEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleDragEnd]);

  return {
    svgRef,
    rotation,
    isDragging,
    handleMouseDown,
    handleTouchStart,
  };
};

export default useSpin;

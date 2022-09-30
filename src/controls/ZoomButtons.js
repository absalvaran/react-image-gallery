import React from "react";
import { bool, func } from "prop-types";
import SVG from "src/SVG";

const ZoomButtons = React.memo(
  ({
    isFullscreen,
    onClickClose,
    onClickZoomIn,
    onClickZoomOut,
    onClickReset,
  }) => {
    return (
      <>
        {isFullscreen && (
          <div className="zoom-container">
            <button
              type="button"
              className="zoom-button"
              onClick={onClickClose}
            >
              <SVG icon="close" viewBox="0 0 20 20" />
            </button>
            <div className="zoom-controls">
              <button className="zoom-button" onClick={onClickZoomIn}>
                <SVG icon="zoomIn" viewBox="0 0 25 25" />
              </button>
              <button className="zoom-button" onClick={onClickZoomOut}>
                <SVG icon="zoomOut" viewBox="0 0 25 25" />
              </button>
              <button className="zoom-button reset-icon" onClick={onClickReset}>
                <SVG icon="reset" viewBox="0 0 16 16" />
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
);

ZoomButtons.displayName = "ZoomButtons";

ZoomButtons.propTypes = {
  isFullscreen: bool.isRequired,
  onClickClose: func.isRequired,
  onClickZoomIn: func.isRequired,
  onClickZoomOut: func.isRequired,
  onClickReset: func.isRequired,
};

export default ZoomButtons;

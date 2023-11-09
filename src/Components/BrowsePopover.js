import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './BrowsePopover.css'; // Correct way to import the CSS file
 

const BrowsePopover = ({ showPopOver, setShowPopOver, anchorEl, setAnchorEl }) => {
    const handleClose = () => {
        setAnchorEl(null);
        setShowPopOver(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Popover
            id={id}
            open={showPopOver}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <div className="browse-container">
                <div className="browse-container-col">
                    <Typography sx={{ p: 2 }}>Adventure</Typography>
                    <Typography sx={{ p: 2 }}>FanFiction</Typography>
                    <Typography sx={{ p: 2 }}>Horror</Typography>
                    <Typography sx={{ p: 2 }}>Mystery</Typography>
                    <Typography sx={{ p: 2 }}>Paranormal</Typography>
                </div>
                <div className="browse-container-col">
                    <Typography sx={{ p: 2 }}>Editor's pick</Typography>
                    <Typography sx={{ p: 2 }}>Fantasy</Typography>
                    <Typography sx={{ p: 2 }}>Humor</Typography>
                    <Typography sx={{ p: 2 }}>Poetry</Typography>
                    <Typography sx={{ p: 2 }}>Short Story</Typography>
                </div>
                <div className="browse-container-col">
                    <Typography sx={{ p: 2 }}>Historical</Typography>
                    <Typography sx={{ p: 2 }}>LGBTQ+</Typography>
                    <Typography sx={{ p: 2 }}>Non-Fiction</Typography>
                    <Typography sx={{ p: 2 }}>Romance</Typography>
                    <Typography sx={{ p: 2 }}>Teen Fiction</Typography>
                </div>
            </div>
        </Popover>
    );
}

export default BrowsePopover;

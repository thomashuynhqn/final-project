import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

const ProductComment = ({
  authorAvatar,
  authorName,
  authorRole,
  content,
  createdAt,
  isLiked: isLikedProp,
  likes: likesProp,
  ...restProps
}) => {
  const [isLiked, setIsLiked] = useState(isLikedProp);
  const [likes, setLikes] = useState(likesProp);

  const handleLike = () => {
    setIsLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setIsLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        pb: 3,
      }}
      {...restProps}
    >
      <Avatar src={authorAvatar} />
      <Paper
        sx={{
          ml: 3,
          pl: 1.5,
          pr: 4.5,
          py: 1.5,
          width: "100%",
        }}
        variant="outlined"
      >
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography color="textPrimary" variant="subtitle2">
              {authorName}
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {authorRole}
            </Typography>
          </div>
          <Typography color="textSecondary" variant="caption">
            {createdAt}
          </Typography>
        </Box>
        <Typography color="textPrimary" variant="body2">
          {content}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 2,
          }}
        >
          {isLiked ? (
            <Tooltip title="Unlike">
              <IconButton
                onClick={handleUnlike}
                size="small"
                sx={{ color: "secondary.main" }}
              >
                <FavoriteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Like">
              <IconButton onClick={handleLike} size="small">
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          <Typography color="textSecondary" variant="subtitle2">
            {likes}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

ProductComment.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorRole: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
};

export default ProductComment;

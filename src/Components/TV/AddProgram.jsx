import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Modal } from '@mui/material';

const AddProgram = ({ open, handleClose }) => {
    const [videoUrl, setVideoUrl]=useState('')
    const [title, setTitle]=useState('')
    const [duration, setDuration]=useState('')
    const [channel, setChannel]=useState('')
    const [category, setCategory]=useState('')
    const [type, setType]=useState('')

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-program-modal-title"
            aria-describedby="add-program-modal-description"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    px={{ xs: 2, md: 8 }}
                    py={{ xs: 8, md: 5 }}
                    bgcolor="white"
                    borderRadius={4}
                    maxWidth={1200}
                    width="100%"
                    boxShadow={3}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="black"
                        align="center"
                        sx={{ mb: { xs: 4, md: 6 } }}
                    >
                        Add Program
                    </Typography>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Video URL
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 5,
                                    justifyContent: 'end',
                                    px: 20,
                                    py: 3,
                                    mt: 6,
                                    width: '50%',
                                    borderRadius: 2,
                                    borderBottom: 2,
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    borderColor: 'black',
                                    borderStyle: 'solid',
                                    backgroundColor: 'rgba(189, 189, 189, 0.5)',
                                    color: 'rgba(0, 0, 0, 0.7)',
                                    '@media (max-width: 500px)': {
                                        flexWrap: 'wrap',
                                        px: 5,
                                        maxWidth: '100%',
                                        typography: 'h2',
                                    },
                                }}
                                onChange={(e) => setVideoUrl(e.target.value)}
                            >
                                
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Title
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 5,
                                    justifyContent: 'end',
                                    px: 20,
                                    py: 3,
                                    mt: 6,
                                    width: '50%',
                                    borderRadius: 2,
                                    borderBottom: 2,
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    borderColor: 'black',
                                    borderStyle: 'solid',
                                    backgroundColor: 'rgba(189, 189, 189, 0.5)',
                                    color: 'rgba(0, 0, 0, 0.7)',
                                    '@media (max-width: 500px)': {
                                        flexWrap: 'wrap',
                                        px: 5,
                                        maxWidth: '100%',
                                        typography: 'h2',
                                    },
                                }}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                                
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Duration
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 5,
                                    justifyContent: 'end',
                                    px: 20,
                                    py: 3,
                                    mt: 6,
                                    width: '50%',
                                    borderRadius: 2,
                                    borderBottom: 2,
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    borderColor: 'black',
                                    borderStyle: 'solid',
                                    backgroundColor: 'rgba(189, 189, 189, 0.5)',
                                    color: 'rgba(0, 0, 0, 0.7)',
                                    '@media (max-width: 500px)': {
                                        flexWrap: 'wrap',
                                        px: 5,
                                        maxWidth: '100%',
                                        typography: 'h2',
                                    },
                                }}
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Category
                            </Typography>
                            <Box
                                sx={{
                                    bgcolor: 'neutral.200',
                                    borderRadius: 2,
                                    '& .MuiSelect-select': {
                                        py: 1.5,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
                                        justifyContent: 'end',
                                        px: 20,
                                        py: 3,
                                        mt: 6,
                                        width: '90%',
                                        borderRadius: 2,
                                        borderBottom: 2,
                                        borderTop: 0,
                                        borderLeft: 0,
                                        borderRight: 0,
                                        borderColor: 'black',
                                        borderStyle: 'solid',
                                        backgroundColor: 'rgba(189, 189, 189, 0.5)',
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        '@media (max-width: 500px)': {
                                            flexWrap: 'wrap',
                                            px: 5,
                                            maxWidth: '100%',
                                            typography: 'h2',
                                        },
                                    }}onChange={(e) => setCategory(e.target.value)}

                                >
                                    <Box sx={{ flex: 'auto', typography: 'h3', fontSize: '1.5rem' }}>
                                        Select...
                                    </Box>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a9d1bfe5af7121f0f700e0e52a09783cc9b5cfe4d14c4f693c6f00296afc9f?apiKey=83349bf32574467093878959cd2ece82&"
                                        alt="Channel Icon"
                                        style={{
                                            flexShrink: 0,
                                            marginY: 'auto',
                                            aspectRatio: '1.72',
                                            width: 50,
                                        }}
                                    />

                                    {/* <MenuItem value="Recommended">Recommended</MenuItem>
                                    <MenuItem value="Popular">Popular</MenuItem>
                                    <MenuItem value="Featured">Featured</MenuItem> */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={2}>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Channel
                            </Typography>
                            <Box
                                sx={{
                                    bgcolor: 'neutral.200',
                                    borderRadius: 2,
                                    '& .MuiSelect-select': {
                                        py: 1.5,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
                                        justifyContent: 'end',
                                        px: 20,
                                        py: 3,
                                        mt: 6,
                                        width: '90%',
                                        borderRadius: 2,
                                        borderBottom: 2,
                                        borderTop: 0,
                                        borderLeft: 0,
                                        borderRight: 0,
                                        borderColor: 'black',
                                        borderStyle: 'solid',
                                        backgroundColor: 'rgba(189, 189, 189, 0.5)',
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        '@media (max-width: 500px)': {
                                            flexWrap: 'wrap',
                                            px: 5,
                                            maxWidth: '100%',
                                            typography: 'h2',
                                        },
                                    }}
                                    onChange={(e) => setChannel(e.target.value)}
                                >
                                    <Box sx={{ flex: 'auto', typography: 'h3', fontSize: '1.5rem' }}>
                                        Select...
                                    </Box>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a9d1bfe5af7121f0f700e0e52a09783cc9b5cfe4d14c4f693c6f00296afc9f?apiKey=83349bf32574467093878959cd2ece82&"
                                        alt="Channel Icon"
                                        style={{
                                            flexShrink: 0,
                                            marginY: 'auto',
                                            aspectRatio: '1.72',
                                            width: 50,
                                        }}
                                    />
                                    {/* <MenuItem value="Channel 1">Channel 1</MenuItem>
                                    <MenuItem value="Channel 2">Channel 2</MenuItem>
                                    <MenuItem value="Channel 3">Channel 3</MenuItem> */}
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Type
                            </Typography>
                            <Box
                                sx={{
                                    bgcolor: 'neutral.200',
                                    borderRadius: 2,
                                    '& .MuiSelect-select': {
                                        py: 1.5,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 5,
                                        justifyContent: 'end',
                                        px: 20,
                                        py: 3,
                                        mt: 6,
                                        width: '90%',
                                        borderRadius: 2,
                                        borderBottom: 4,
                                        borderTop: 0,
                                        borderLeft: 0,
                                        borderRight: 0,
                                        borderColor: 'black',
                                        borderStyle: 'solid',
                                        backgroundColor: 'rgba(189, 189, 189, 0.5)',
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        '@media (max-width: 500px)': {
                                            flexWrap: 'wrap',
                                            px: 5,
                                            maxWidth: '100%',
                                            typography: 'h2',
                                        },
                                    }}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <Box sx={{ flex: 'auto', typography: 'h3', fontSize: '1.5rem' }}>
                                        Select...
                                    </Box>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a9d1bfe5af7121f0f700e0e52a09783cc9b5cfe4d14c4f693c6f00296afc9f?apiKey=83349bf32574467093878959cd2ece82&"
                                        alt="Channel Icon"
                                        style={{
                                            flexShrink: 0,
                                            marginY: 'auto',
                                            aspectRatio: '1.72',
                                            width: 50,
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" mt={7} gap={4}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClose}
                            sx={{
                                mr: 5,
                                variant: "h2",
                                width: '160px',
                                textTransform: 'none',
                                borderColor: 'black',
                                color: 'black',
                                backgroundColor: "#ffffff",
                                fontSize: '1.55rem',
                                fontWeight: 'bold',
                                borderWidth: 'bold',
                                '&:hover': {
                                    backgroundColor: "#ffffff",
                                },
                                '&:hover': {
                                    borderColor: 'black'
                                },
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                variant: "h2",
                                width: '160px',
                                textTransform: 'none',
                                backgroundColor: "#0b0b3b",
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: "#0b0b3b",
                                },
                            }}
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddProgram;
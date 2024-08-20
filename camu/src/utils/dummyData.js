/** Dummy data for presentation
 *  Will be replaced by data from the server
 */


const topLatestLesson = {
    previewImgSrc: 'src/assets/Lessons/lessonsGallery/large_preview.png',
    title: 'Gain technical skills through learning stuff',
    tags: ['Render', 'Render', 'Render'],
    length: '24:34',
    date: 'June 7, 2024',
}

// Dummy latest lessons
const latestLessons = [
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_1.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render'],
        length: '24:34',
        date: 'June 7, 2024',
    },
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_2.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render'],
        length: '24:34',
        date: 'June 7, 2024',
    },
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_3.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render'],
        length: '24:34',
        date: 'June 7, 2024',
    }
]

// Dummy all lessons
const allLessons = [...latestLessons,
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_1.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render'],
        length: '24:34',
        date: 'June 7, 2024',
    },
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_2.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render'],
        length: '24:34',
        date: 'June 7, 2024',
    },
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_3.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render'],
        length: '24:34',
        date: 'June 7, 2024',
    }
]


const defaultCategories = ['Rhino', 'Rhino','Rhino','Rhino','Rhino']

export {latestLessons, topLatestLesson, defaultCategories, allLessons}
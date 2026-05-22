'use client';

import AllCourseList from '@/components/ui/AllCourseList/AllCourseList';
import { Search, X } from '@boxicons/react';
import { useEffect, useState } from 'react';

const AllCourse = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            const response = await fetch('/api/courses');

            const { courses } = await response.json();

            setCourses(courses.slice(0, 6));
            setLoading(false);
        };

        fetchCourses();
    }, []);

    const searchFilterCourse = courses.filter((course) =>
        course.title.toLowerCase().trim().includes(search.toLowerCase().trim()),
    );

    const handleResetInput = () => {
        setSearch('');
    };

    return (
        <section className='py-[56px] bg-[#000000] px-5 lg:py-[112px]'>
            <div className='w-full max-w-[1400px] mx-auto mb-12'>
                <div className='w-full text-center space-y-3 mb-12'>
                    <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                        Explore Our Courses
                    </h2>
                    <p className='max-w-2xl mx-auto text-base text-[#A3A3A3]'>
                        Discover practical, expertly crafted courses to build
                        real-world skills, boost your confidence, and grow your
                        tech career at your own pace.
                    </p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full h-[54px] flex items-center justify-center bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-full overflow-hidden'>
                        <div className='pl-4 h-full flex items-center justify-center'>
                            <Search className='text-[#ffffff]/30' size='sm' />
                        </div>
                        <input
                            type='text'
                            aria-label='input'
                            placeholder='Search courses...'
                            name='search'
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            className='p-4 outline-none w-full text-sm text-[#ffffff] placeholder:text-[#ffffff]/30'
                        />
                        {search && (
                            <button
                                type='button'
                                aria-label='button'
                                role='button'
                                onClick={handleResetInput}
                                className={`pr-4 cursor-pointer`}
                            >
                                <X className='text-[#ffffff]/30' size='sm' />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <AllCourseList isLoading={loading} courses={searchFilterCourse} />
        </section>
    );
};

export default AllCourse;

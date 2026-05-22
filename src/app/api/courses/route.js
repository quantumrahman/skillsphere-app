import { NextResponse } from 'next/server';
import courses from '@/json/courses.json';

export const GET = async () => {
    return NextResponse.json({ courses: courses });
};

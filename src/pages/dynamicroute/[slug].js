"use client"; // This directive marks the file as a Client Component

import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
 
export default function Page() {
    const router = useRouter()
    useEffect(() => {
        async function fetchData() {
            console.log('c',router.query.slug);
        }
        fetchData();

      }, [router]);
    
}
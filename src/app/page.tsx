import Image from 'next/image'

import React, { useState, useEffect } from "react";


export default function Home() {
  return (
    <main className="container y mandatory-scroll-snapping m-0">
        <section className="flex items-center justify-center">
            <Image src="/dreamjunk.png" alt="Dream Junk" height="300" width="300" className="main-logo"/>
        </section>
        <section className="flex items-center justify-center">
            <span>Lorem Ipsum</span>
        </section>
        <section className="flex items-center justify-center">
            <span>Lorem Ipsum</span>
        </section>
        <section className="flex items-center justify-center">
            <span>Lorem Ipsum</span>
        </section>
        <section className="flex items-center justify-center">
            <span>Lorem Ipsum</span>
        </section>
        <section className="flex items-center justify-center">
            <span>Lorem Ipsum</span>
        </section>
        <section className="flex items-center justify-center">
            <span>Lorem Ipsum</span>
        </section>
    </main>
  )
}
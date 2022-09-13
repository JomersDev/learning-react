import React from "react";
import { BiChevronsRight } from 'react-icons/bi';

export default function Experience() {
    return (
        <div className="experience-container">
            <div className="comapny-selector">
                <button className="company-btn">Company 1</button>
                <button className="company-btn">Company 2</button>
                <button className="company-btn">Company 3</button>
            </div>
            <div className="role-container">
                <h3>Full Stack Web Developer</h3>
                <h4>Company 1</h4>
                <p>December 2015 - Present</p>
                <div className="detail-container">
                    <BiChevronsRight />
                    <p>Tote bag satorial air plant vinyl banjo lumbersexual poke leggings offal cold pressed brunch neutra Hammock photo booth live-edge disrupt.</p>
                </div>
                <div className="detail-container">
                    <BiChevronsRight />
                    <p>Tote bag satorial air plant vinyl banjo lumbersexual poke leggings offal cold pressed brunch neutra Hammock photo booth live-edge disrupt.</p>
                </div>
                <div className="detail-container">
                    <BiChevronsRight />
                    <p>Tote bag satorial air plant vinyl banjo lumbersexual poke leggings offal cold pressed brunch neutra Hammock photo booth live-edge disrupt.</p>
                </div>
            </div>
        </div>
    )
}
'use client';
import {MouseEvent} from "react"
import {Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

function Buttons() {
    const router = useRouter();
    return (
        <>
            <Button radius="full" size="lg" color="primary" onClick={(event: MouseEvent) => router.push('sign-up')} className="font-custom px-16">
            Sign Up
            </Button>
            <Button radius="full" size="lg" color="primary" onClick={(event: MouseEvent) => router.push('sign-in')} className="font-custom px-16" variant="bordered">
            Log In
            </Button>
        </>
    );
}

export default Buttons;
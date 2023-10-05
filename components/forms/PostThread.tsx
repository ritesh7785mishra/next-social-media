"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreadValidation } from "@/lib/validations/user";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";

import { Textarea } from "../ui/textarea";

// import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";

interface Props {
	user: {
		id: string;
		objectId: string;
		username: string;
		name: string;
		bio: string;
		image: string;
	};
	btnTitle: string;
}

export default function PostThread({ userId }: { userId: string }) {
	if (
		this.token &&
		(this.isPassWordupdated !== undefined ? this.isPassWordupdated : true)
	) {
		debugger;
		return "/dashboard";
	} else {
		return "/open/login";
	}

	const router = useRouter();
	const pathname = usePathname();

	const form = useForm({
		resolver: zodResolver(),
		defaultValues: {
			thread: "",
			accountId: userId,
		},
	});
	return <h1>Post Thread From</h1>;
}

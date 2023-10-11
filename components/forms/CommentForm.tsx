"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import * as z from "zod";

import { Input } from "@/components/ui/input";

// import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import { CommentValidation } from "@/lib/validations/thread";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.actions";
// import { createThread } from "@/lib/actions/thread.actions";

interface Props {
	threadId: string;
	currentUserImg: string;
	currentUserId: string;
}
const CommentForm = ({ threadId, currentUserImg, currentUserId }: Props) => {
	const router = useRouter();
	const pathname = usePathname();

	const form = useForm({
		resolver: zodResolver(CommentValidation),
		defaultValues: {
			thread: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
		await addCommentToThread(
			threadId,
			values.thread,
			JSON.parse(currentUserId),
			pathname
		);

		form.reset();
	};
	return (
		<Form {...form}>
			<form className="comment-form" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="thread"
					render={({ field }) => (
						<FormItem className="flex w-full items-center gap-3">
							<FormLabel className="">
								<Image
									src={currentUserImg}
									alt="Profile image"
									width={48}
									height={48}
									className="rounded-full object-cover"
								/>
							</FormLabel>
							<FormControl className="border-none bg-transparent">
								<Input
									placeholder="Comment..."
									className="no-focus text-light-1 outline-1"
									type="text"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type="submit" className="comment-form_btn">
					Reply
				</Button>
			</form>
		</Form>
	);
};

export default CommentForm;

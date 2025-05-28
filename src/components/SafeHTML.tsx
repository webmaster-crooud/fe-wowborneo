import { useEffect, useState } from "react";

export const SafeHTML = ({ html, maxWords }: { html: string; maxWords: number }) => {
	const [processedHtml, setProcessedHtml] = useState("");

	useEffect(() => {
		// Parse HTML dan hitung kata yang sebenarnya
		const div = document.createElement("div");
		div.innerHTML = html;

		// 1. Ambil text content dengan benar
		const rawText = div.textContent || "";

		// 2. Split kata dengan regex untuk handle multiple spaces
		const words = rawText.trim().split(/\s+/);

		// 3. Cek apakah perlu tambah ellipsis
		const shouldAddEllipsis = words.length > maxWords;

		// 4. Potong kata dan gabungkan
		const truncated = words.slice(0, maxWords).join(" ");

		setProcessedHtml(truncated + (shouldAddEllipsis ? "..." : ""));
	}, [html, maxWords]);

	return <p className="lg:w-[55%] text-description xl:w-[50%]" dangerouslySetInnerHTML={{ __html: processedHtml }} />;
};

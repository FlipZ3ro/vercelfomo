import { useQuery } from "@tanstack/react-query";

export default function usePairs() {
	const fetchPairs = async () => {
		const response = await fetch("/api/pairs/new");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

	const {
		data: pairs,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["pairs"],
		queryFn: fetchPairs,
		staleTime: 250000,
	});

	return {
		pairs,
		isLoading,
		error,
	};
}

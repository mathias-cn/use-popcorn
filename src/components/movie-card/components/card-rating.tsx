import { Button } from "../../utils/button";
import { StarRating } from "../../utils/star-rating";

export function CardRating() {
    return (
        <div className="w-full bg-gray-800 p-4 lg:px-8 lg:py-6 rounded-lg space-y-6">
            <StarRating 
                maxRating={10}
                defaultRating={5}
            />

            <Button width="full" colorSchema="colored">
                + Add to List
            </Button>
        </div>
    )
}
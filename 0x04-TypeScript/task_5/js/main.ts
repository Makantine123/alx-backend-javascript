interface MajorCredits {
	credits: number;
	brand: 'Major';
}

interface MinorCredits {
	credits: number;
	brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		brand: 'Major',
		credits: subject1.credits + subject2.credits,
	};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		brand: 'Minor',
		credits: subject1.credits + subject2.credits,
	};
}

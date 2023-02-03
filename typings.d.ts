interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image
    title: string;
}
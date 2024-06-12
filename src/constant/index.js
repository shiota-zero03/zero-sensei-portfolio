import { Frontend, Backend, Dekstop, Artificial, Teaching, Content, Edulab, Ruangguru, ZMI, Study } from "../assets";

const NavMenu = [
    {
        name: 'About',
        linkTo: 'about'
    },
    {
        name: 'Work Experience',
        linkTo: 'work'
    },
    {
        name: 'Project',
        linkTo: 'project'
    },
    {
        name: 'Contact',
        linkTo: 'contact'
    }
]

const Services = [
    {
        title: "Frontend Developer",
        icon: Frontend,
    },
    {
        title: "Backend Developer",
        icon: Backend,
    },
    {
        title: "Dekstop App Developer",
        icon: Dekstop,
    },
    {
        title: "Artificial Intelligence",
        icon: Artificial,
    },
    {
        title: "Teaching",
        icon: Teaching,
    },
    {
        title: "Content Creator",
        icon: Content,
    },
];

const Works = [
    {
        icon: Edulab,
        position: 'Tutor',
        location: 'Edulab Purwakarta',
        description: `
            <ul class="list-disc ms-5 me-1">
                <li>Teaches mathematics subjects at high school level</li>
                <li>Teaching quantitative knowledge subjects for grade 12 preparation for university entrance exams</li>
                <li>Teaching psychological test subjects for the Police Academy entrance test</li>
                <li>Providing mathematics olympiad teaching at MAN Purwakarta in February 2022</li>
            </ul>
        `,
        periode: "Jun 2021 - Jan 2023"
    },
    {
        icon: Ruangguru,
        position: 'Master Teacher',
        location: 'Brain Academy Center Purwakarta',
        description: `
            <ul class="list-disc ms-5 me-1">
                <li>Teaches mathematics and informatics subjects for high school and middle school levels</li>
                <li>Teaches the subjects of quantitative knowledge, mathematical reasoning and general knowledge for grade 12 in preparation for university entrance exams</li>
            </ul>
        `,
        periode: "Jul 2023 - Present"
    },
    {
        icon: ZMI,
        position: 'Fullstack Developer',
        location: 'PT Zen Multimedia Indonesia',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        periode: "Jul 2023 - Present"
    },
    {
        icon: Study,
        position: 'Math Tutor',
        location: 'Akbita Tutoring',
        description: `
            <ul class="list-disc ms-5 me-1">
                <li>Teaching mathematics subjects for the Police Academy entrance test</li>
            </ul>
        `,
        periode: "Sept 2023 - Present"
    },
]

export { NavMenu, Services, Works };
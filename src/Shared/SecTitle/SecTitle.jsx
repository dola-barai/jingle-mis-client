const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto my-8">
            <p className="text-4xl font-semibold uppercase py-4">{heading}</p>
            <p className="text-yellow-600 mb-2 italic">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
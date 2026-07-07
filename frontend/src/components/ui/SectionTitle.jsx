const SectionTitle = ({
title,
subtitle,
}) => {
return(

<div className="text-center mb-20">

<p className="text-blue-400 mb-3">

{subtitle}

</p>

<h2 className="text-5xl font-bold">

{title}

</h2>

</div>

);
};

export default SectionTitle;
  export default function Tags({
    tagType,
    tag,
  }) {
    return (
      <>
        <div className="p-2 m-2 text-white bg-growwOrange border border-black dark:border-white rounded-3xl font-bold">
          <div className=" flex flex-wrap capitalize">
            {tagType}: {tag}
          </div>
        </div>
      </>
    );
  }
  
import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick } from '../assets'


const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary : "",
  })

  const handleSubmit = async (e) => {
    alert("Submitted!")
  }

  const handleChange = (e) => {
    setArticle({
      ...article, url : e.target.value
    })
  }
  
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        {/* Form Starts */}
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}>
          
          {/* Link Image */}
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0  my-2 ml-3 w-5"
          />
          {/* Input */}
          <input
            type="url"
            value={article.url}
            placeholder="Paste your link here"
            onChange={handleChange}
            required
            className="url_input peer"
          />
          {/* Submit Btn */}
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
            --
          </button>
        </form>

        {/* Brows URL History */}
      </div>
      {/* Results */}
    </section>
  );
}

export default Demo
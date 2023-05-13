export const Error = ({text}:{text?: string | string[]}) => {
  if (!text) return null;

  if (Array.isArray(text)) {
    return (
      <div className="error-message">
        {text.map((t, i) => <div key={i}>{t}</div>)}
      </div>
    )
  }

  return (
    <div className="error-message">
      {text}
    </div>
  )
}
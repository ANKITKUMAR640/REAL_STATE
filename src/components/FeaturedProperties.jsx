import PropertyCard from './PropertyCard.jsx';

export default function FeaturedProperties({ list, favs, compare, savedOnly, onToggleSavedOnly, onClear, onToggleSave, onToggleCompare, onView }) {
  return (
    <section id="properties" className="sec">
      <div className="wrap">
        <div className="props__head">
          <div>
            <p className="eyebrow">Featured Properties</p>
            <h2 className="serif h2">Residences of distinction</h2>
          </div>
          <div className="props__tools">
            <span aria-live="polite">{list.length} shown · {favs.length} saved</span>
            <button className="btn btn--outline" onClick={onToggleSavedOnly}>{savedOnly ? 'Show all' : 'Saved only'}</button>
            <button className="btn btn--dark" onClick={onClear}>Clear Filters</button>
          </div>
        </div>
        {list.length === 0 ? (
          <p className="props__empty">No residences match these filters. Clear filters to see the full collection.</p>
        ) : (
          <div className="grid grid--3 st">
            {list.map((p) => (
              <PropertyCard
                key={p.id}
                property={p}
                saved={favs.includes(p.id)}
                comparing={compare.includes(p.id)}
                onToggleSave={onToggleSave}
                onToggleCompare={onToggleCompare}
                onView={onView}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

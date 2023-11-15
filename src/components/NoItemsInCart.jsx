export default function NoItemsInCart() {
    return (
      <>
        <h1 className="h-96 text-3xl text-center mt-52">
          There are no items in the cart. <br /> Want to add some? {""}
          <a className="text-accent hover:underline" href="/shop">
            Head to the shop!
          </a>
        </h1>
      </>
    );
}
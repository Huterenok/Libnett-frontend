export const getTitle = (pathname: string): string => {
  switch (pathname) {
    case "/":
      return "LIBNET";
    case "/host":
      return "BECOME A HOST";
    case "/host/profile":
      return "HOST PAGE";
    case "/host/addBook":
      return "ADD A BOOK";
    case "/owner":
      return "OWNER PAGE";
    case "/owner/search":
      return "HOST SEARCH PAGE";
    case "/reader":
      return "READER PAGE";
    case "/reader/search":
      return "BOOK SEARCH";
    case "/reader/rental":
      return "BOOK RENTAL";
    case "/reader/return":
      return "RETURN THE BOOK";
    default:
      return "LIBNET";
  }
};

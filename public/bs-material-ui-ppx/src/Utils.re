let raiseError = (~loc: Location.t, message: option(string)) =>
  raise(
    Location.Error(
      Location.error(
        ~loc,
        switch (message) {
        | Some(m) => m
        | None => "[%mui.withStyles] accepts a string with a record / theme => record"
        },
      ),
    ),
  );
with import <nixpkgs> {};

pkgs.mkShell rec {
    name = "surfingkeysConfNodejsShell";

    buildInputs = [
      python39
      git
      nodejs_18
    ];

    shellHook = ''
      echo "Nix shell environment with nodejs_18 and python39."
    '';

}

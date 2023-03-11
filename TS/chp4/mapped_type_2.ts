type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type OptionFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureOptions = OptionFlags<FeatureFlags>;

let feature: FeatureOptions = {
  darkMode: true,
  newUserProfile: false,
};

console.log("Features : ", feature);
